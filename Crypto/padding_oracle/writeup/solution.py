#!/usr/bin/env python3

import requests
import sys
import time



BLOCK_SIZE = 16
CHAR_RANGE = 256
url = ''


def test_oracle(url: str, data: bytes) -> bool:
    '''
    Figuring the response from an oracle is tough,
    typically a different response code, clues in the repsonse body or timing
    In this challenge it was giving 200 for correct padding
    '''
    return requests.post(f"{url}", data=data).status_code == 200


def xor(vec1: bytes, vec2: bytes) -> bytearray:
    return bytearray([a ^ b for a, b in zip(vec1, vec2)])


def xor_printable_plaintext(vec1: bytes, vec2: bytes) -> bytearray:
    return bytearray([a ^ b for a, b in zip(vec1, vec2) if int(a ^ b) > 32])


def exploit_padding_oracle(previous_cipher_block: bytes, cipher_block: bytes, url: str) -> str:
    Intermediate = bytearray(BLOCK_SIZE)  # AES 128/192/256
    paddingvector = bytearray(BLOCK_SIZE)  # AES 128/192/256
    # Iterate the block, backwards, finding correct intermediate for each padding
    for i in range(1, BLOCK_SIZE, 1):
        # Set padding for n->n-ith byte
        for j in range(1, i+1):
            paddingvector[-j] = i
        # Something that sets the plaintext to 0!
        fake_previous_cipher = xor(paddingvector, Intermediate)
        # Try all values for current idx
        for c in range(CHAR_RANGE):
            fake_previous_cipher[-i] = c
            '''
            By brute-forcing the fake previous block, we hope to figure out the intermediate 'I'
            vector needed to compute C_{i-1}^I = P_i
            '''
            time.sleep(0.2)
            if test_oracle(url, fake_previous_cipher + cipher_block):
                # We've found the right value for this index that gives the right padding
                # No edge-case with plaintext[-2] == 0x2
                Intermediate = xor(fake_previous_cipher, paddingvector)
                break

    # Assuming the plaintext to be printable chars only
    plaintext = xor_printable_plaintext(previous_cipher_block, Intermediate)
    return bytes(plaintext).decode("utf-8", "ignore")


def crack(cipher: bytes, url: str = "http://127.0.0.1:7777/") -> str:
    # Partition cipher into blocks(AES-CBC 16B Blocks), reverse since we go backwards
    blocks = [cipher[i:i+BLOCK_SIZE]
              for i in range(0, len(cipher), BLOCK_SIZE)]
    # For each block pair(previous,current), crack the cipher
    return "".join([exploit_padding_oracle(p, c, url) for p, c in zip(blocks, blocks[1:])])


if __name__ == '__main__':
    if len(sys.argv) != 2:
        exit(
            f"Usage: python3 {sys.argv[0]} <1|2>\n[1=localhost, 2=remote(motherload)]")

    match sys.argv[1]:
        case '1':
            url = "http://127.0.0.1:7777"
        case '2':
            url = "http://motherload.td.org.uit.no:8004"

    cipher = '59f012ccb45de7ee596b87e45af712329b25d04e385791c61d72f84f3689556214bb965440c47ac87705e0cf0411d334e0089dd34c77f40df23653d3ba3e31b1e02c4a1f56d3bbf430b4b52427aa3a6a191475a6f737361fe6d13808f229c8f4'
    print('Testing:', cipher)
    print(
        f"~~~ Plaintext ~~~\n{crack(bytes.fromhex(cipher),url)}\n{''.join('~' for _ in range(len('~~~ Plaintext ~~~')))}")

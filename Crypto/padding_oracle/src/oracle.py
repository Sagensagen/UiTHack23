#!/usr/bin/env python3
import logging
from Crypto.Cipher import AES
from flask import Flask, request, Response
from waitress import serve

BLOCK_SIZE = AES.block_size
_key = b'Zy(%%}*LjqoLg^np8jH49u[TbdhsoZzb'
_iv = b'\x8a\xeb\xfa\xf0%\xe8n\xa0\xa2\xb0|\xb5\x15\x8b\xa3\x9a'
empty_block = b'\x00' * BLOCK_SIZE


def padding(text:str) -> bytes:
    b = BLOCK_SIZE - (len(text) % BLOCK_SIZE)
    return text + chr(b)*b  # PKCS7 padding


def unpadding(data:bytes) -> bytes:
    return data[:-data[-1]]


# AES CBC Encryption
def encryption(text:str)-> str:
    encryptor = AES.new(_key, AES.MODE_CBC, IV=_iv)
    padded_text = padding(text)
    # We're putting in an empty block to make decryption easier(first block will be garbage, we don't provide IV)
    return encryptor.encrypt(empty_block+padded_text.encode("utf-8"))


def decrypt(data:bytes) ->bytes:
    # previous block is used to decrypt the current block
    iv = data[:BLOCK_SIZE]
    cipher = AES.new(_key, AES.MODE_CBC, iv)
    return cipher.decrypt(data[BLOCK_SIZE:])


def valid_padding(data:bytes) -> bool:
    valid = True
    decrypted = decrypt(data)
    last_byte = decrypted[-1]
    # Is the last byte a valid padding length?
    if last_byte < 1 or last_byte > BLOCK_SIZE:
        return not valid
    # Check that the padding is correct, for the length of the padding
    for i in range(0, last_byte):
        if decrypted[-i-1] != last_byte:
            return not valid
    return valid


### Flask app ###
# Silence you *********
app = Flask(__name__)
log = logging.getLogger('werkzeug')
log.disabled = True


@app.post("/")
def oracle():
    try:
        data = request.data
        if valid_padding(data):
            return Response("", status=200)
        else:
            return Response("", status=400)
    # Supress all other errors
    except Exception:
        return Response("", status=400)


if __name__ == '__main__':
    print(encryption(
        'VWlUSGFjazIzezFfNTcxbGxfcjNtM21iM3JfbXlfa24zMzVfNGY3M3JfNWs0NzFuNn0=').hex())
    serve(app, host='0.0.0.0', port=7777)

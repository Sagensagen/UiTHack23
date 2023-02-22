# Crypto - I need padding
> crypto  - 250

```
An oracle is a person or agency considered to provide wise and insightful counsel or prophetic predictions
Extended definition: oracle may also refer to the site of the oracle, and to the oracular utterances themselves, called khrēsmē 'tresme' (χρησμοί) in greek.
Serge oracles are a collection of oracular utterances written in french hexameters, ascribed to the serge, prophetesses who uttered divine revelations in frenzied states.
Croesus, king of lydia beginning in 16 BC, tested the oracles of the world to discover which gave the most accurate prophecies. Oracles are seen, even in 2002

```
We got this prediction, but it doesn't make much sense: ```59f012ccb45de7ee596b87e45af712329b25d04e385791c61d72f84f3689556214bb965440c47ac87705e0cf0411d334e0089dd34c77f40df23653d3ba3e31b1e02c4a1f56d3bbf430b4b52427aa3a6a191475a6f737361fe6d13808f229c8f4```

Server: http://motherload.td.org.uit.no:8004

Tip1: Put bytes\\
Tip2: I've seen this '=' before...

# Writeup
A modified oracle-server can be found in [oracle.py](oracle_modified.py) which prints information when padding is correct. What byte it leaked information about, the decrypted value and the previous cypher that was used.

## Tips in the text
For the keen eye there's some tips in the text and which is a rewritten version of [oracle-wiki](https://en.wikipedia.org/w/index.php?title=Oracle&direction=prev&oldid=1133675012):
1. The capital letters read out: AES-CBC
2. There's no such thing as a serge oracle(there's a a few serges working in oracle though) and this is a hint to [Serge Vaudenay](https://en.wikipedia.org/wiki/Serge_Vaudenay) the original constructor of this attack
3. Vaudenay proved the attack in `2002`,  which is the last hint in the puzzle

Knowing this one might correctly come to the conclusion that we're working with a server prone to some sort of padding-oracle attack!

## The attack
The padding oracle attack relies on some important features:
1. The encryption is done by bitwise xor through blocks of a given size. The neat thign with xor is that no information is lost and: `(a xor b xor b) = a`
    - If we lost information what type of function would we be dealing with?
2. In the cipher block chaining(CBC) scheme, each ciphertext-block depends on the previous ciphertext, and the first ciphertext, a initialization vector(IV). 
3. The chaining of blocks with xor makes it so that a byte-change in a ciphertext will cause only a byte-change in the next plaintext
4. Using this we can generate valid paddings for each byte at the time, and recreate the vector we would need to xor the previous cipher-text block with to get the plaintext
5. The prediction looks like hex, but the first hint tells us to `put bytes` so we should probably convert it

For a full walkthrough have a look at:
[cryptopals](https://research.nccgroup.com/2021/02/17/cryptopals-exploiting-cbc-padding-oracles/)
for some nice visualizations.

## Script
[solution](solution.py) gives an example of how to solve this oracle

# Disclaimer
During review after the event we noticed that the initially proposed title of 'I need padding' had gotten lost, making the riddle in the text more difficult.

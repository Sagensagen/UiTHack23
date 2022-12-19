# Crypto - I need padding
> crypto  - 250

```
An oracle is a person or agency considered to provide wise and insightful counsel or prophetic predictions
Extended definition: oracle may also refer to the site of the oracle, and to the oracular utterances themselves, called khrēsmē 'tresme' (χρησμοί) in greek.
Serge oracles are a collection of oracular utterances written in french hexameters, ascribed to the serge, prophetesses who uttered divine revelations in frenzied states.
Croesus, king of lydia beginning in 16 BC, tested the oracles of the world to discover which gave the most accurate prophecies. Oracles are seen, even in 2002

```
We got this prediction, but it doesn't make much sense: ```59f012ccb45de7ee596b87e45af712329b25d04e385791c61d72f84f3689556214bb965440c47ac87705e0cf0411d334e0089dd34c77f40df23653d3ba3e31b1e02c4a1f56d3bbf430b4b52427aa3a6a191475a6f737361fe6d13808f229c8f4```

Server: mayhem.td.org.uit.no:7777

Tip1: Put bytes
Tip2: I've seen this '=' before...

## Writeup
The oracle-server can be found in [oracle.py](src/oracle.py)

The server is using AES-CBC, and returns true if the padding is correct, false if not. Knowing this, we can use the classic padding oracle attack to decrypt the ciphertext.
Check out this explanation:
[padding_oracle_explained)](https://flast101.github.io/padding-oracle-attack-explained/)


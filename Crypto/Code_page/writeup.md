> # Crypto - Translation
>
>> Crypto - 150pts
>
>I fired up my old machine, the whirling and clicking of the hard drive was comforting. I opened up the terminal and typed in the command to run the program. There I was greeted with a weird [text](./text), but im no Klingon. Can you help me translate it?
>
>Tips: You may find some decoders online

## Writeup

The text is encoded using UTF-16LE encoding, which is a 16-bit little endian encoding scheme. This means that each character is encoded using 2 bytes. It can be decoded using `iconv` or any other tool that supports UTF-16LE encoding.

```bash
iconv -f utf-8 -t utf-16le text > text.string
```

## Flag

`UiTHack23{FL3X1B1L3_3NC0D1NG_12_AW3S0M3}`

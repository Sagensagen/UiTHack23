> # Crypto - Code Page
>
>> Crypto - 100pts
>
> I fired up my old machine, the whirling and clicking of the hard drive was comforting. I opened up the terminal and typed in the passcode: 2 1 0 2 7 and was greeted with the homescreen. There I found with a weird [text](./file1), but im no Klingon. Can you help me translate it?

> Tips: There was another [file](file2) in the directory, maybe it can help you?

## Writeup

The text is encoded using a japanese EBCDIC encoding that was used in Windows XP: Extended Alpha Lowercase (21027). Which can be found by googling "japanese ebcdic encoding 21027" from the hints.

After finding the encoding, one can decode it using an online en/decoder such as [CyberChef](https://gchq.github.io/CyberChef/). Steps:

1. Open CyberChef
2. Select `Encode Text` from the `Operations` menu
3. Choose `Extended Alpha Lowercase (21027)`
4. Copy the text from `file1` into the input field
5. You should now see the flag

## Flag

`UiTHack23{lost_in_translation}`

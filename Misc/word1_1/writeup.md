># Pwn - Microsoft Word 1.1!
>> Pwn - 150pts
>## You can now get the new Microsoft Word 1.1! It has all the features you need, and more for only 498$! <br />
>
>#### In the dark ages of computer word processing, what you wrote (and saw on the screen, if you had one) was cryptic formatting commands embedded within the text, like this:
>
>.nf <br>
>.ll 4.0i <br>
>.in 2.0i <br>
>101 Main Street <br>
>Morristown, NJ  07960 <br>
>15 March, 1997 <br>
>.sp 1i <br>
>.in 0 <br>
>Dear Sir, <br>
>.fi <br>
>.ti 0.25i <br>
>I just wanted to drop you a note to thank you… <br>
>
>
>#### After “compiling” and printing, you finally saw the result – which often wasn’t what you wanted. Make changes. Try again.
>
>## But not anymore, and for only 498$ you can get the new Microsoft Word 1.1!
>
>
>
>![Microsoft Word 1.1 trial](Download_link)
>
>[Writeup](writeup.md)

## Writeup
Use git history to find the commit that might seem somewhat more suspicious, aka `removing enterprice credentials`.
Go to the commit and find the credentials in the diff or something.
Flag is ciphered into rot13.

By Grepping UIThack you get the wrong file, but it gives that the flag is ciphered rot13 as a hint

```
UiTHack23{word1.1_actually_cost_498$_in_1990!}
```


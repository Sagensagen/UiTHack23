> # Lost My Keys
> > Crypto - 350 pts
> 
> There I was, making a CTF challenge, and out of nowhere lost the file containing the flag!
> Without any fault of mine, the wrong script got executed; `python loseKeys.py my-keys jungle`. 
> All of a sudden there's a figurative jungle of a dictionary staring me down like an angry tiger.
> 
> Who so ever put that script on my computer should get a good ol' spanking, but I don't really know what to do now. 
> All I've got is this file with [song lyrics](jungle) and a [binary file](jungle-of-keys.bin) with my catastrophy inside.
> 
> Can you helps?

## Writeup

The file directories are XOR'ed with the flag in rotated order. 
We need to use the original plaintext from of the lyrics to XOR the directory names to get back to the flags as keys, and then the cyclic pattern of the flag will appear.

```
Flag: UiTHack23{if-you-liked-it-then-you-shoulda-put-a-key-ring-on-it}
```

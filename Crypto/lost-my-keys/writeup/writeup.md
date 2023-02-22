> # Lost My Keys
> > Crypto - 350 pts
>
> There I was, making a CTF challenge, and out of nowhere lost the file containing the flag!
> Without any fault of mine, the wrong script got executed; `python loseKeys.py my-keys jungle`.
> All of a sudden there's a figurative jungle of a dictionary staring me down like an angry tiger.
>
> Who so ever put that script on my computer should get a good ol' spanking, but I don't really know what to do now.
> All I've got is this file with [song lyrics](../src/jungle) and a [binary file](../src/jungle-of-keys.bin) with my catastrophy inside.
>
> Can you helps?

# Writeup

## Solution Approach

The solution starts with inspecting the `loseKeys.py` script.

In short, the program creates and pickles a list of paths from the flag-file `my-keys` and the lyrics file `jungle`. The target-name in the path (element after last `jungle-of-keys.bin/.../.../<target>`) is the result of an XOR operation between a lyric line and a rotating element of the key.

The program creates path combinations for all elements created recursively, but the recursive addition to the binary output is mainly obfuscating because we only need the first rotation of the key, which we can find in the initial top-directory.

This *encryption* and our access to the lyrics used allows us to apply a so called **Known-plaintext** attack. If we XOR the ciphertext (path targets) again with the plaintext (lyrics) then what we are left with is the key.

This Python [script](find-keys.py) is a suggestion on how the flag can be extracted using this method.

## Flag
`UiTHack23{if-you-liked-it-then-you-shoulda-put-a-key-ring-on-it}`

## Note

The challenge had to be created with a sub-set of the original lyrics found in 'jungle.bak' because the recursion complexity of using the full version is approximately factorial to the number of lines in the lyrics file.
If $N$ is the number of lines and all lines are used ($N=47$), then the complete recursion operation has a complexity of $\mathcal{O}(N!) = \mathcal{O}(47!) = \mathcal{O}(258 623 241 511 168 180 642 964 355 153 611 979 969 197 632 389 120 000 000 000)$.

In the end, the lyrics in 'jungle' with $6$ lines and complexity $\mathcal{O}(720)$ made up the plaintext.

### This caused a problem

Since the number of components in the flag is $13$ (words separated with a dash), and the lyric lines were $6$, the whole key was not actually included in the binary file. Therefore, all we are able to get out of the flag is `if-you-liked-it-then-you`, and if you are able to retrieve this part then you should consider successful in the challenge.

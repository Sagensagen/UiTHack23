> # Lost My Keys
> > Crypto - 50 pts
> 
> There I was, making a CTF challenge, and out of nowhere lost the file containing the flag!
> Without any fault of mine, the wrong script got executed; `python lose-keys.py my-keys jungle`. 
> All of a sudden there's a figurative jungle of a directory staring me down like an angry tiger.
> 
> Who so ever put that script on my computer should get a good ol' spanking, but I don't really know what to do now. 
> All I've got is this link to a [song lyric](https://www.google.com/search?q=ta+livet+som+det+faller+seg+tekst&sxsrf=AJOqlzVAxM9Q5raTSTIqOnZBE__1Aj8kOw%3A1676069503016&ei=f8rmY-hGs4jFzw-A4LK4DA&oq=ta+livet+som+det+faller+seg+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIECAAQQzIGCAAQFhAeMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDIGCAAQFhAeMgYIABAWEB46CAgAEIAEELADOgkIABAHEB4QsAM6BwgAEB4QsAM6CggAEB4Q8QQQsANKBAhBGAFKBAhGGABQsgFYsgFg7gZoAXAAeACAAV6IAV6SAQExmAEAoAEByAEIwAEB&sclient=gws-wiz-serp&si=AEcPFx7I7Kw_8jGwwdv2ief7Zru2tYtM2yuZD5pmtoYe_Dq9312GMCKhLorEWHbcXGCicaUCLKU7acWgNvoshRne9-ITC8ySBj9fHyFkuuqBzPqvEuNqrIHl3AypnFE-UIncIh94mdMDRGY-BTKRIErIobWQZxbVs4JXnQFnE7ZYlZwx_Z7NhQfcfkoko0c2ofDby2Jt8-GuUlXW7lgZNwa3vRREQE2fR_X06P9gTJnR2hVTA1XXczXBpplHrZODdaGVg_kL8WKycDPcYPQymde84CjKo-Gt_1BEpo7SNVQ8dq0fZ0o_EPcKV1i9YZABFC0ycEkjivNSUGQGZNzQs81RTRRLrB155zTqoScXhi1AN3MFzKInWksc7lOxWnuZoGl1D1sRHDLMkdewilL-EIFHyx4jIBLj-SR3m1x6ov6EA_hSyzJhYNdXGVeMPEzFxnA2KRlh2h9BGueCmNkQL6w0jDq_ID55XhI_evBxNDMPcY-ZnH2ZgQ38hTrkMvjzdPVUpd-qqvS6JQxIRbrXYUT2rYdY2IyYzw%3D%3D&ictx=1&ved=2ahUKEwjs6q6_wYz9AhWocvEDHUvsARUQyNoBKAB6BAgNEAY) and a [zip](lost-my-keys.zip) with my catastrophy inside.
> 
> Can you helps?

## Writeup

The file directories are XOR'ed with the flag in rotated order. 
We need to use the original plaintext from of the lyrics to XOR the directory names to get back to the flags as keys, and then the cyclic pattern of the flag will appear.

```
Flag: UiTHack22{if-you-liked-it-then-you-shoulda-put-a-key-ring-on-it}
```

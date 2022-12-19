> # Rev - Forrest
> Rev- 50pts
>
> My mama always said, "Binaries are not great for hiding things".

## Writeup
The task hints to the flag being hidden inside the binary.

Running the linux-command `strings` on the binary will give us the test strings within the binary. One of these strings will be the flag.
```bash
$ strings forrest
```

Altneratively you can in addition to `strings` use the linux-command `grep` to only get the flag and no other strings.

```bash
$ strings forrest | grep "UiTHack23"
```

```
UiTHack23{L1f3_w4s_lik3_4_b0x_0f_ch0col47e5}
```

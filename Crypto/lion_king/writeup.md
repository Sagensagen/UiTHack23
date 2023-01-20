> # Crypto - Lion King
> > Crypto - 100pts
>
> Walking through the jungle with Timon and Pumbaa you stumble across some text scratched into the bark. Can you figure out the original text?
> ```
> VWlUSGFjazIze0g0a3VuNF9tNDdhdDQhfQ==
> ```

## Writeup
The flag is encoded using base64 (recognized by the '==' at the end).

It can be decoded in the (unix) terminal
```bash
$ echo VWlUSGFjazIze0g0a3VuNF9tNDdhdDQhfQ== | base64 -d
UiTHack23{H4kun4_m47at4!}
```
or using an online decoder (e.g. [Cyberchef](https://gchq.github.io/CyberChef/))

```
UiTHack23{H4kun4_m47at4!}
```

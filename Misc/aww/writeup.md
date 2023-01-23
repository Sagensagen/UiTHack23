> # Aww
> >
> > Misc - 200 pts
>
> Aww so cute, 7 types of cats and dogs, but I can't see the key. Can you help me?
>
> The flag will be the same format as this one: `UiTHack23{this_could_be_a_key}`
>
> Tips: Dogs are 0 and cats are 1

## Writeup

The flag can be found be using an image classification model which classifies dogs and cats,
which then can be saved as 0 and 1 respectivly, this will result in a binary with byte-length 7. The process is as follows:

1. Read the 50 images, resize them into `244x244` (or whatever your model needs) and save them as matricies.
2. Find a model which is trained to identify cats and dog. (For example [this one](https://huggingface.co/ScottMueller/Cats_v_Dogs.ONNX)) Load the chosen model and deseralize it.
3. Use an online string -> binary (byte-length 7) converter (e.g. [CyberChef](https://gchq.github.io/CyberChef/#recipe=From_Binary('Space',7)&input=MTAwMTExMDAxMTAwMTExMTEwMTAwMTExMDExMTAxMTAwMDAxMTEwMDEwMTEwMTAxMTA))

```bash
Flag: UiTHack23{N3tw0rk}
```

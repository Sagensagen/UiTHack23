> # Pwn - Mp3 Player
> > Pwn - 150pts
>
> We found an old mp3 player laying around and decided to connect it to the internet for everyone to listen to its > good ol' hits. <br />
> However, we might have messed up some of the instructions when setting it up...
>
> [Files](src)
>
> You can connect to the mp3 player with
> ```bash
> $ nc motherload.td.org.uit.no 8006
> ```

## Writeup
Exploit script can be found in [exploit.py](exploit.py).

The C-code uses the `gets()` function to gather user input, which is vulnerable to a buffer overflow attack where we can overwrite the instruction pointer `rip` to call the function printing the flag.

We need to find the amount of bytes needed to overwrite the instruction pointer `rip`, and use that as padding before we overwrite `rip` with the function address of *call_me_maybe*, which gives us the flag.

The offset before overwriting the instruction pointer can be found with the python script [find_offset.py](find_offset.py) (requires pwntools `pip install pwntools`), or by manually segmentation faulting the program, and find the amount of bytes needed for the segmentation fault to occur.

The function address we want to overwrite the instruction pointer `rip` with can be found with pwntools' `elf.symbols["call_me_maybe"]` or with *gdb*
```bash
$ gdb mp3_player
$ disas call_me_maybe
Dump of assembler code for function call_me_maybe:
   0x00000000004012fb <+0>:	endbr64
   0x00000000004012ff <+4>:	push   %rbp
   0x0000000000401300 <+5>:	mov    %rsp,%rbp
```
Giving the address of the function 0x4012fb

The payload is then crafted by sending 40 bytes (our found offset) and the function address 0x4012fb as bytes.

```
UiTHack23{H3r35_MY_4dDr355_50_caLL_M3_may83}
```

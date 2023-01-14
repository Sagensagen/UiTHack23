from pwn import *

p = remote("motherload.td.org.uit.no", 8010)
p.recvuntil(b"Ready?")
p.sendline(b"Yup")
p.recvline()

# Implement your solution here

p.interactive()

## Writeup
The starting code can be expanded to the following to get the flag

```python
from pwn import *

p = remote("motherload.td.org.uit.no", 8100)
p.recvuntil(b"Ready?")
p.sendline(b"Yup")
p.recvline()

for i in range(300):
    question = p.recvline().decode().strip().split(": ")[1]
    p.sendline(str(int(eval(question))).encode("utf-8"))

p.interactive()
```
```
UiTHack23{y0u_kn0w_m4th_0r_jus7_lucky_gu3ss1ng?}
```

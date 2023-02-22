# Pwn - Remote tamagOtchi Pet
> Pwn - 500pts

You might remember the Tamagotchi from the late 90's and early 2000's. Good news, we have improved the tamagotchi by putting everyone's favourite pet on the web!

The flag is located in the home directory on the server.

Connect with netcat to access your [tamagotchi](src/tamagotchi)
```command
$ nc motherload.td.org.uit.no 8009
```

Hint 1. What kind of exploit is hinted to in this text?

Hint 2. You will need to find the libc version used by the server.

[Writeup](writeup/writeup.md)

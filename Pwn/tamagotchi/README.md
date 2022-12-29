# Pwn - Remote tamagOtchi Pet
> Pwn - 500pts

You might remember the Tamagotchi from the late 90's and early 2000's. Good news, we have improved the tamagotchi by putting everyone's favourite animal on the web so you don't loose it!

Here's your [tamagotchi](src/tamagotchi)

Connect with netcat to play with your tamagotchi
```command
$ nc motherload.td.org.uit.no 6400
```

The flag is located in the home directory on the server.

Hint 1. What kind of exploit is hinted to in this text?

Hint 2. You will need to find the libc version used by the server.

[Writeup](writeup.md)

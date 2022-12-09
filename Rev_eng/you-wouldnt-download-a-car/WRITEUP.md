
# Writeup

Open binary in radare debugging mode.
```
r2 -d you-wouldnt-download-a-car
```

Analyze all, seek to main and print assembly.
```
aaa
s main
pdf
```

Analyze the assembly and find out where you think the key check happens. Note the the address of an instruction right before the check (e.g. 0xdeadbeef).

Make breakpoint before check and run program:
```
db 0xdeadbeef
dc
```

Print the contents of the stack:
```
px
```

Look for something that looks like a licence. Use that as input in the program and retrieve the flag.
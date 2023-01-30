> # Rev - Pokemon Battle V2
> > Rev - 500 pts <br>
> > Required: Solved "Pokemon Battle"
>
> The feedback for the V1 of the Pokemon Battle has been reviewed, and the following changes have been made:
> - Gym leaders have less hp
> - The amount of gym leaders have been reduced from 5 to 3
> - Patched unintended way to view the flag
> - The game encrypts the flag for you when you beat the game
>
> Here is your patched version of the [game](src/pokemon).
## Writeup
**NOTE**: The beginning part is explained further in Pokemon Battle V1 <br>

Running the program does the same as in version 1, however a secret code has been added to skip to the hall-of-fame, which is obtained after beating all the trainers. The secret code is also obtained then, and is `C0mpl3te_P0ked3x`.

The program is written in python and compiled into an executable with _pyinstaller_.<br>
We can extract the contents of the executable using [pyinstxtractor](https://github.com/extremecoders-re/pyinstxtractor).
```command
$ python3 pyinstxtractor.py pokemon_v2
```
Using the same method as version 1 of the program does not work, as _pyarmor_ has been use to obfuscate the source code
```command
$ uncompyle6 main.pyc
from pytransform import pyarmor_runtime
pyarmor_runtime()
__pyarmor__(__name__, __file__, b'PYARMOR\x00\x00\x03 ...
<snip>
```

Although pyarmor in this case probably could be broken with a tool like [PyArmor-Unpacker](https://github.com/Svenskithesource/PyArmor-Unpacker), an easier approach would be to rewrite the get_flag-file so that we can print the decrypted flag instead of getting the encrypted version that the game gives us. <br>

We move the required files from the _PYZ-00.pyz_extracted/_ directory into the same directory as _main.pyc_ (pokemon.pyc, battle.pyc, pytransform.pyc), and run it.

```command
$ python3 main.pyc
Traceback (most recent call last):
  File "<dist/obf/main.py>", line 3, in <module>
  File "<frozen main>", line 5, in <module>
  File "<battle.py>", line 1, in <module>
  File "<frozen battle>", line 6, in <module>
ModuleNotFoundError: No module named 'get_flag'
```
This error tells us we are missing get\_file.py/pyc. Instead of moving the already existing one (giving us the encrypted flag), we can write a new one which prints the original flag. Knowledge from version 1 of the game would hint that the flag is passed to the function in get\_flag.py. <br>

By creating a file *get\_flag.py*, and solving the errors that the program gives us when trying to run *main.pyc*, we end up with the following *get\_flag.py* file
```python
class Flag:
	def print_flag(self, flag):
		print(flag)
```
where we print the flag passed as the argument to _print\_flag_
```
UiTHack23{Y0u_ar3_7he_p0k3mon_ch4mpi0n}
```

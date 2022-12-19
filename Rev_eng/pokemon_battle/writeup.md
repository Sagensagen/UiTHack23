> # Rev - Pokemon Battle
> > Rev - 400 pts
>
> Hello there! <br>
> Welcome to the world of Pokemon!<br>
> My name is Oak! <br>
> People call me the Pokemon Prof! <br>
>
> Show me your Pokemon skills and I will reward you with a flag!
>
> Here is your [game](src/pokemon).

## Writeup
Running the command `strings` on the attached executable reveals that the program is written in python and packed into an executable.
```command
$ strings pokemon
<snip>
zPYZ-00.pyz
4libpython3.8.so.1.0
<snip>
pydata
```
Such compiling of python code into executables can be done using `pyinstaller`. We can extract the _pyinstaller_ files used to compile the program using [pyinstxtractor](https://github.com/extremecoders-re/pyinstxtractor).

```command
$ python3 pyinstxtractor.py pokemon
```
With the extracted files we can view the source code of the python files by decompiling the .pyc-files using [uncompyle6](https://pypi.org/project/uncompyle6/).
```command
$ uncompyle6 <filename>
```
Within the directory of the extracted files (probably called _pokemon_extracted_) we have a directory storing the imported python-files, _PYZ-00.pyz_extracted_. This directory has a file `get_flag.pyc`.

By decompiling it we get the encrypted flag and its key
```
$ uncompyle6 get_flag.pyc
class Flag:

    def __init__(self):
        self.enc_flag = b'a\x1a<#RT\x08ZF\x16SC\x1c\\Rh\x00\\B\x0e\\,[\x06l\x03\x0f\x04*\\\x01B\x15'
        self.key = b'4shk37chum4shk37chum4shk37chum4sh'

    def print_flag(self):
        flag = self.xor(self.enc_flag, self.key)
        <snip>

    def xor(self, data, key):
        return bytearray((a ^ b for a, b in zip(*map(bytearray, [data, key]))))
```
Xoring the encrypted flag with the key gives us the flag
```
UiTHack23{g0t7a_c47ch_3m_4ll_151}
```

"""
Extracts and composes key components into original form 
from before lose-keys-readable.py was run.
"""
from   loseKeys import B
import os
from   pickle import loads
from   sys import argv

if __name__ == "__main__":
	if len(argv) != 3:
		exit(f"usage: python {__file__} <jungle-bin> <jungle-lyrics> ")

	jungle, lyrics = argv[1:]

	# plain-text
	with open(lyrics,"r") as j:
		J = j.readlines()

	# encrypted plain-text
	with open(jungle,"rb") as j:
		e:"list[str]" = [ e for e in loads(j.read()) if e != jungle ] # without top dir-name

	# cast encrypted plain-text from strings to ints
	# under first directory 'jungle-of-keys.bin/'
	E:"list[int]" = [ 0 ] * len(J)
	for i in range(len(J)):
		# remove pre-path components
		E[i] = int(os.path.basename(e[i]))

	# decrypt ciphertext with plaintext to get key/flag
	K = [ "" ] * len(J)
	for i in range(len(J)):
		p, q = J[i], E[i]
		k = B(p)^q
		K[i] = int.to_bytes(k,length=64, byteorder="big").decode()
		
		print(f"lyrics   : {J[i]}")
		print(f"encrypted: {E[i]}")
		print(f"key[{i+1}]   : {K[i]}")
	
	# concatenate with dashes that key was split with when read
	key = "-".join(K)
	flag = f"UiTHack23{{{key}}}"
	print(f"\nFLAG     : {flag}")

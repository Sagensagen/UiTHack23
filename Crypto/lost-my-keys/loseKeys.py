import os
from   pickle import dumps
from   sys import argv

def mkjungle(J:"list[str]", K:"list[str]", start:str) -> "list[str]":
	for i in range(len(J)):
		J[i] = E(J[i],K[i%len(K)])
	return _mkjungle(J,[ start ],start)

def _mkjungle(J:"list[str]", jungle:"list[str]", here:str, n:int=0) -> "list[str]":
	jungle += [ os.path.join(here,J[i]) for i in range(len(J)) ]
	for i in range(n,len(J)):
		_mkjungle(J,jungle,os.path.join(here,J[i]),n+1)
	return jungle

def E(p:str, q:str) -> str:
	return str(B(p)^B(q))

def B(s:str) -> int:
	return int.from_bytes(s.encode(),byteorder="big")

if __name__ == "__main__":
	if len(argv) != 3:
		exit(f"usage: python {__file__} <key-file> <jungle-file> ")

	jungle, (KFile,JFile) = "jungle-of-keys.bin", argv[1:]
	
	J = open(JFile).readlines()
	K = open(KFile).read().split('-')
	with open(jungle,"wb") as j:
		j.write( dumps( mkjungle(J,K,jungle) ) )

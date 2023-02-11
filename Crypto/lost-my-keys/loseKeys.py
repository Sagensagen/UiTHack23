from   pickle import dumps
from   sys import argv

def mkjungle(J:"list[str]", K:"list[str]", start:str) -> "dict[str:dict]":
	""" 
	Create directories from strings in J.
	Directory names are XOR'ed with rotating strings in K. 
	Number of directories created will be len(J)**2.
	"""
	for i in range(len(J)):
		J[i] = E(J[i],K[i%len(K)])
	return _mkjungle(J,{},start)

def _mkjungle(J:"list[str]", jungle:"dict[str:dict]", here:str, n:int=0) -> "dict[str:dict]":
	jungle[here] = { J[i] : {} for i in range(n,len(J)) }
	for i in range(n,len(J)):
		_mkjungle(J,jungle[here],J[i],n+1)
	return jungle

def E(p:str, q:str) -> str:
	""" Return XOR with p and q as string. """
	return str(B(p)^B(q))

def B(s:str) -> int:
	""" Return string as byte-value. """
	return int.from_bytes(s.encode(),byteorder="big")

if __name__ == "__main__":
	if len(argv) != 3:
		exit(f"usage: python {__file__} <key-file> <jungle-file> ")

	jungle, parent, (KFile,JFile) = "jungle-of-keys", "..", argv[1:]
	
	J = open(JFile).readlines()
	K = open(KFile).read().split('-')
	with open(jungle+".bin","wb") as j:
		j.write( dumps( mkjungle(J,K,jungle) ) )

	# TODO: 
	# make less readable version
	# make solution script

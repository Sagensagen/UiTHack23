import os
from   sys import argv

def mkjungle(J:"list[str]", K:"list[str]", n:int=0) -> None:
	""" 
	Create directories from strings in J.
	Directory names are XOR'ed with rotating strings in K. 
	Number of directories created will be len(J)**2.
	"""
	if n >= len(J):
		return

	for i in range(n,len(J)):
		j    = i%len(K)
		J[i] = E(J[i],K[j])
		dn   = mkdir(J[i])

		os.chdir(dn)
		mkjungle(J,K,n+1)
		os.chdir(parent)

def E(p:str, q:str) -> str:
	""" Return XOR with p and q as string. """
	return str(B(p)^B(q))

def B(s:str) -> int:
	""" Return string as byte-value. """
	return int.from_bytes(s.encode(),byteorder="big")

def mkdir(d:str, nlen:int=64) -> str:
	"""
	Truncate directory name to max 64 bytes.
	Create directory and file with that name.
	File contains full directory-name.
	"""
	dn = d if len(d) < nlen else d[:nlen]
	fn = "." + dn

	os.makedirs(dn, exist_ok=True)
	if not os.path.exists(fn):
		with open(fn,"wb") as f:
			f.write(d.encode())
	return dn

if __name__ == "__main__":
	if len(argv) != 3:
		exit(f"usage: python {__file__} <jungle-file> <key-file>")

	jungle, parent, (K,J) = "jungle-of-keys", "..", argv[1:]
	
	J = open(J).readlines()
	K = open(K).read().split('-')
	
	os.makedirs(jungle, exist_ok=True)
	os.chdir(jungle)
	
	mkjungle(J,K)
	# mkjungle(K,J)
	
	# TODO: 
	# zip and delete jungle file
	# make less readable version
	# make solution script

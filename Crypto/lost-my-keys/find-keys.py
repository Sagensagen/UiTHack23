from   pickle import loads
from   sys import argv
from   loseKeys import B

if __name__ == "__main__":
	if len(argv) != 3:
		exit(f"usage: python {__file__} <jungle-bin> <jungle-lyrics> ")

	jungle, JFile = argv[1:]

	J = open(JFile).readlines()
	with open(jungle,"rb") as j:
		E:"dict[str:dict]" = loads(j.read())
	
	i = 0
	for k,v in E[jungle]:
		if i >= len(J):
			break
		# plain text
		p:str = J[i]
		B(p)^int(k)
		i += 1

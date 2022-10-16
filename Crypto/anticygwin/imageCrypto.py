from   Crypto.Cipher import AES as aes
from   Crypto.Util.Padding import pad, unpad
from   hashlib import blake2s
import numpy as np
import os
from   PIL import Image
from   insertFlag import UiTHack23, gifInsertFlag

def encryptImage(img:np.ndarray, key:bytes) -> np.ndarray:
	""" Return image array encrypted with electronic codebook block mode. """
	cipher = aes.new(
		key  = key,
		mode = aes.MODE_ECB,
	)
	C = cipher.encrypt(
		pad(img.tobytes(), cipher.block_size),
	)
	return np.frombuffer(
		unpad(C, cipher.block_size)
	).reshape(img.shape)

if __name__ == "__main__":
	imagefile = f"image.gif"
	outfile   = f"image-encrypt-flag.gif"

	# keylen = 2**4
	# key    = blake2s( os.urandom(keylen) ).digest()
	flag = ""
	for part in UiTHack23: flag += part
	key = flag.encode()

	def f(img:Image.Image) -> None:
		C = encryptImage(np.asarray(img), key)
		return Image.fromarray(C)
	
	gifInsertFlag(imagefile, outfile, f)

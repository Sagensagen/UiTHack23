#!/usr/bin/env python3.8

from matplotlib import pyplot as plt
import numpy as np
from PIL import Image, ImageSequence

UiTHack23 = [
	"don't",
	"use",
	"cyg",
	"win",
]

def main():
	imagefile = f"image.gif"
	img = Image.open(imagefile)
	# fourth to last frame 
	startframe = img.n_frames - 4
	flagframes = ImageSequence.all_frames(img)[startframe:]

	for i in range(len(flagframes)):
		flag = np.array(flagframes[i])

		w,h = flag.shape[:2]
		print(flag.shape)

		# TODO: need put strings in byte format visible in frames

		flagframes[i] = Image.fromarray(flag)

	img.save(f"image-flag.gif", format="gif")

if __name__ == "__main__":
	main()

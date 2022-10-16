
import imageio.v2 as imageio
from   matplotlib import pyplot as plt
import numpy as np
from   PIL import Image, ImageSequence, ImageDraw, ImageFont

# flag
UiTHack23 = [
	"don't",
	"use",
	"cyg",
	"win",
]
INTENSITY = 255
FONTPATH  = "/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf"
FONTSIZE  = 10

def insertFlag(img:Image.Image) -> "list[Image.Image]":
	""" Load .gif-file, insert flag in frames, and save. """

	flagframes = [ frame for frame in ImageSequence.all_frames(img) ]
	startframe = img.n_frames - len(UiTHack23)
	
	for i in range(startframe, len(flagframes)):
		flag = textPixel( UiTHack23[i-len(flagframes)] )

		w,h = flag.shape[:2]
		x   = img.height//2 - h//2
		y   = img.width //2 - w//2

		flagframes[i] = np.asarray(flagframes[i]).astype(np.uint8)
		flagframes[i][x:x+w,y:y+h] = flag
		# plt.imshow(flagframes[i])
		# plt.show()
		flagframes[i] = Image.fromarray(flagframes[i])

	return flagframes

def textPixel(text:str, mode:str="RGB") -> np.ndarray:
	""" Return array image depiction of argument text. """

	font = ImageFont.truetype(FONTPATH, FONTSIZE)
	w,h  = font.getsize(text)

	img  = Image.new(mode, (w,h), INTENSITY)
	
	draw = ImageDraw.Draw(img, mode)
	draw.text((0,0), text, font = font)

	return np.asarray(img, dtype = np.uint8)

if __name__ == "__main__":
	imagefile   = f"image.gif"
	outputimage = f"image-flag.gif"

	img = Image.open(imagefile)
	flags = insertFlag(img)
	
	flags[0].save(
		outputimage,
		format = "gif",
		save_all = True,
		append_images = flags[1:],
		**img.info,
	)


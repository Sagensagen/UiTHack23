
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

def gifInsertFlag(imagefile:str, outfile:str, modify:callable=lambda:None) -> None:
	""" Load .gif-file, insert flag in frames, and save. """
	img = Image.open(imagefile)

	flagframes = [ frame for frame in ImageSequence.all_frames(img, func=modify) ]
	startframe = img.n_frames - len(UiTHack23)
	
	for i in range(startframe, len(flagframes)):
		flag = textPixel( UiTHack23[i-len(flagframes)] )

		w,h = flag.shape[:2]
		x   = img.height//2 - h//2
		y   = img.width //2 - w//2

		flagframes[i] = np.asarray(flagframes[i]).astype(np.uint8)
		flagframes[i][x:x+w,y:y+h] = flag
		flagframes[i] = Image.fromarray(flagframes[i])

	flagframes[0].save(
		outfile,
		format = "gif",
		save_all = True,
		append_images = flagframes[1:],
		**img.info,
	)

def textPixel(text:str, mode:str="RGB") -> np.ndarray:
	""" Return array image depiction of argument text. """
	font = ImageFont.truetype(FONTPATH, FONTSIZE)
	w,h  = font.getsize(text)

	img  = Image.new(mode, (w,h), INTENSITY)
	
	draw = ImageDraw.Draw(img, mode)
	draw.text((0,0), text, font = font)

	return np.asarray(img, dtype = np.uint8)

if __name__ == "__main__":
	imagefile = f"image.gif"
	outfile   = f"image-flag.gif"
	gifInsertFlag(imagefile, outfile)

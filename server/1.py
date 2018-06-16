from PIL import Image,ImageDraw,ImageFont
from random import randint
import sys

W = int(sys.argv[1])
H = int(sys.argv[2])
s = sys.argv[3]
FS = 20

img = Image.new('RGB',(W,H),(255,255,255))
gd = ImageDraw.Draw(img)

for i in range(len(s)):
    gd.text(
    (i*W/len(s) + randint(-10,10),(H-FS)/2 + randint(-10,10)),
    s[i],
    (0,0,0),
    ImageFont.truetype("C:\\Windows\\Fonts\\Calibri.TTF",FS)
)
for i in range(10):
    gd.line(
    (randint(0,W),randint(0,H),randint(0,W),randint(0,H)),
    fill = (randint(0,255),randint(0,255),randint(0,255)),
    width = 1
)

for i in range(100):
    gd.point(
           (randint(0,W), randint(0,H)), fill=(randint(0,255),randint(0,255),randint(0,255))
)

img.save('a.png','PNG')
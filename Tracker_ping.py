from collections import deque
from imutils.video import VideoStream
import numpy as np
import argparse
import cv2
import imutils
import time

ap = argparse.ArgumentParser()
ap.add_argument("-v", "--video")
ap.add_argument("-b", "--buffer", type=int, default=64)
args = vars(ap.parse_args())
#colori BGR di soglia, otlre a quelli non detecta nulla
oraLower = (6, 51, 86)
oraUpper = (64, 255, 255)
if not args.get("video", False):
	vs = VideoStream(src=0).start()
else:
	vs = cv2.VideoCapture(0)
time.sleep(2.0)

#inizializzo le liste per i punteggi
tocchi_blu = 0
tocchi_verde = 0

while True:
	frame = vs.read()
	frame = frame[1] if args.get("video", False) else frame
	#fine video se il frame è nullo
	if frame is None:
		break
	frame = cv2.resize(frame, (1080, 500))
	#frame = imutils.resize(frame, width=1080, height=100)
	blurred = cv2.GaussianBlur(frame, (11, 11), 0)#blur per avere più contrasto
	hsv = cv2.cvtColor(blurred, cv2.COLOR_BGR2HSV)#hsv è una gamma di colori sul viola
	

	mask = cv2.inRange(hsv, oraLower, oraUpper)
	mask = cv2.erode(mask, None, iterations=2)
	mask = cv2.dilate(mask, None, iterations=2)
	cnts = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
	cnts = imutils.grab_contours(cnts)
	center = None

	if len(cnts) > 0:
		c = max(cnts, key=cv2.contourArea)
		((x, y), radius) = cv2.minEnclosingCircle(c)
		M = cv2.moments(c)
		center = (int(M["m10"] / M["m00"]), int(M["m01"] / M["m00"]))
		#print(radius)
		if radius < 15 and radius >1:
			cv2.circle(frame, (int(x), int(y)), int(radius),(64, 255, 255), 4)
		else:
			cv2.circle(frame, (int(x), int(y)), int(radius),(255, 255, 255), 4)	
	
	x = (M['m10'] // M['m00'])
	y = (M['m01'] // M['m00'])
	ytavolo = 400


	
	#controllo collisioni... tenute conto in liste
	
	#print(y)

	if x >= 80 and x <= 540 and y <= ytavolo and y >= 383:        
		print("----------------------------------tocco verde")
		time.sleep(.5)
		tocchi_blu=0
		tocchi_verde + 1
	
	if x >= 540 and x <= 1000 and y <= ytavolo and y >= 383:
		print("----------------------------------tocco blu")
		time.sleep(.5)
		tocchi_verde=0
		tocchi_blu + 1

	#controllo uscita di palla (nessun tocco acquisito)

	#campo verde
	if x >= 80 and x <= 540 and y >= ytavolo and y <= ytavolo+30:       
		if(tocchi_verde!=0):
			print("punto segnato blu")
		elif(tocchi_verde>=2):
			print("punto segnato verde")
		else:
			print("punto segnato verde")
		time.sleep(3)
	#campo blu
	if x >= 540 and x <= 1000 and y >= ytavolo and y <= ytavolo+30:        
		if(tocchi_blu!=0):
			print("punto segnato verde")
		elif(tocchi_blu>=2):
			print("punto segnato blu")
		else:
			print("punto segnato blu")
		time.sleep(3)

	#linee campo da rispettare
	cv2.line(frame,(540,ytavolo),(1000,ytavolo),(255,0,0),3)
	cv2.line(frame,(80,ytavolo),(540,ytavolo),(0,255,0),3)
	cv2.line(frame,(540,ytavolo),(540,ytavolo-60),(0,0,0),2)
	cv2.imshow("tracekr", frame)
	key = cv2.waitKey(1) & 0xFF
	if key == ord("q"):
		break
cv2.destroyAllWindows()
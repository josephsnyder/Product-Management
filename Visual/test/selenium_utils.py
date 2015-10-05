import png
import os

  ############################
  # Reads in two PNG images and checks for the
  # images to be the same in a pixel by pixel check
  #
  # If more than 8000 pixels are different,
  # it writes out a B/W difference image
  ############################
def compareImg(imageRoot):

  newFileName = os.path.normpath(os.getcwd() + "/" + imageRoot +'_new.png');
  compFileName = os.path.normpath(os.getcwd() + "/" + imageRoot +'_comp.png');
  oldFileName = os.path.normpath(os.path.dirname(os.path.realpath(__file__))+'/imgData/'+imageRoot+'_old.png')

  new = png.Reader(newFileName)
  newImgData = new.read()
  newImg = list(newImgData[2])

  old = png.Reader(oldFileName)
  oldImg = list(old.read()[2])
  diffLines = []

  count = 0;
  for line in range(0,len(newImg)):
    diffLine=[]
    for pixel in range(0, len(newImg[line])):
      if(not (oldImg[line][pixel] == newImg[line][pixel])):
        diffLine.append(255)
        count += 1
      else:
        diffLine.append(0)
    diffLines.append(diffLine)
  if count >= 8000:
    png.from_array(diffLines,'L;8',info={'width': len(diffLines[0]),'height':len(diffLines)}).save(compFileName)
    # Output XML for Dart  Necessary for the upload of the image after
    print "<DartMeasurement name=\"ImageError\" type=\"numeric/double\">"+str(count)
    print "</DartMeasurement>"
    print "<DartMeasurement name=\"BaselineImage\" type=\"text/string\">Standard</DartMeasurement>"
    print "<DartMeasurementFile name=\"TestImage\" type=\"image/jpeg\">" + newFileName
    print"</DartMeasurementFile>"
    print"<DartMeasurementFile name=\"DifferenceImage\" type=\"image/jpeg\">" + compFileName
    print"</DartMeasurementFile>"
    print"<DartMeasurementFile name=\"ValidImage\" type=\"image/jpeg\"> " + oldFileName
    print"</DartMeasurementFile>"
    return False
  else:
    return True
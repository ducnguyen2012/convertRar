from moviepy.editor import concatenate_audioclips, AudioFileClip
import random
import os
class conCatFile:
    inputListMP3 = []
    resultMP3 = "result.mp3"
    path = ""
    filenames = []
    def __init__(self, absPathFolderContainSong):
        self.path = absPathFolderContainSong
        self.filenames = os.listdir(self.path)
    
    def setPath(self,absPathFolderContainSong):
        self.path = absPathFolderContainSong
        
    def getPath(self):
        return self.path
    
    def setListInputMP3(self, inputListMP3: list):
        self.inputListMP3 = inputListMP3
    
    def getListInputMP3(self):
        return self.inputListMP3
    
    def getFileNames(self):
        return self.filenames
    
    def getResultFile(self):
        return self.resultMP3
   
    def conCatFileMP3(self):
        randomIndexList = []
        for filename in self.getFileNames():
            self.getListInputMP3().append(self.getPath() + filename)
        randomListInputFile = []
        while len(self.getListInputMP3()) > 0:
            index = random.randint(0,len(self.getListInputMP3())-1)
            randomIndexList.append(self.getListInputMP3()[index]) # tra ve ten bai hat!
            randomListInputFile.append(AudioFileClip(self.getListInputMP3()[index]))
            self.getListInputMP3().pop(index)
        final = concatenate_audioclips(randomListInputFile)
        final.write_audiofile(self.getResultFile())
        return randomIndexList



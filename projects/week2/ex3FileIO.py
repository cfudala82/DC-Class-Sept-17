# Write a program that prompts the user to enter a file name, then prints the
# letter histogram and the word histogram of the contents of the file.

# Function that makes a list of all the different letters and counts how many of
# each letter.  It inputs the data into a dictionary variable lettersDict.
def letterHistogram(letters):
    lettersDict = {}
    lowerWord = letters.lower()

    for i in lowerWord:
        lettersDict[i] = 0

    for i in lowerWord:
        lettersDict[i] = lettersDict[i] + 1

    return lettersDict

# Function that makes a list of all the different words and counts how many of
# each word.  It inputs the data into a dictionary variable wordsDict.

def wordHistogram(words):
    wordsDict = {}
    lowerWords = words.lower()
    splitSentence = lowerWords.split()

    for i in splitSentence:
        wordsDict[i] = 0

    for i in splitSentence:
        wordsDict[i] = wordsDict[i] + 1

    return wordsDict

fileName = input('Enter file name: ')
file_handle = open(fileName,'r')
content = file_handle.read()
file_handle.close()

lettersHist = letterHistogram(content)
wordsHist = wordHistogram(content)

print(lettersHist)
print(wordsHist)

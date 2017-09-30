wordsDict = {}

sentence = input('Word Histogram, Please input a sentence: ')
splitSentence = sentence.split()

for i in splitSentence:
    wordsDict[i] = 0

for i in splitSentence:
    wordsDict[i] = wordsDict[i] + 1

print(sentence)
print(wordsDict)

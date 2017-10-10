lettersDict = {}

word = input('Letter Histogram, Please input a word: ')
lowerWord = word.lower()
# 
# for i in lowerWord:
#     lettersDict[i] = 0

for i in lowerWord:
    lettersDict[i] = lettersDict[i] + 1

# print(word)
print(lettersDict)

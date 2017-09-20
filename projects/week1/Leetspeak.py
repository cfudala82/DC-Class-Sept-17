# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7
print('Goats in Leetspeak')
word = 'Goats'.upper()
# word = word.upper()
# new_letters = word[:len(word)]
new_word = ''
# print('test', new_letters)
for x in word:
    i = x
    if i == 'E':
        i = '3'
    if i == 'G':
        i = '6'
    if i == 'I':
        i = '1'
    if i == 'O':
        i = '0'
    if i == 'S':
        i = '5'
    if i == 'T':
        i = '7'
    if i == 'A':
        i = '4'
    new_word = new_word + i
print(new_word)

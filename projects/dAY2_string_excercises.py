name = "John Jacob Jingle Heimer Schmidt"
word_letters = []
new_letters = []
count = 0

print('\n', 'name = ', name, '\n', sep='')

print('1.Uppercase a String: ')
nameUpper = name.upper()
print(nameUpper)

print('2.Capitalize a String: ')
nameCapital = name.title()
print(nameCapital)

print('3.Reverse a String: ')
nameReverse = name[::-1]
print(nameReverse)

print('4.Leetspeak: ')
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

print('5.Long Vowels')

good = 'Good'
new_good = good.replace('oo', 'ooooo')
print(new_good)

cheese = 'Cheese'
new_cheese = cheese.replace('ee', 'eeeee')
print(new_cheese)


man = 'Man'
new_man = man.replace('a', 'aaaaa')
print(new_man)

spoon = 'Spoon'
new_spoon = spoon.replace('oo', 'ooooo')
print(new_spoon)

print('6.Caesar Cipher')
cipher = input("Cipher? ")
new_cipher = ''

for char in cipher:
    new_char = char
    letter_number = ord(new_char)
    new_number = int(letter_number) + 13
    if new_number >= 122:
        new_number = new_number - 26
    newer_char = chr(new_number)
    new_cipher = new_cipher + newer_char
print(new_cipher)

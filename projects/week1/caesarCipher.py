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

import random

my_random_number = random.randint(1, 10)

print('I am thinking of a number from 1 to 10.')
prompt = int(input("What's the number? "))

while prompt != my_random_number:
    if prompt < my_random_number:
        print(prompt, 'is too low.')
        prompt = int(input("What's the number? "))
    elif prompt > my_random_number:
        print(prompt, 'is too high.')
        prompt = int(input("What's the number? "))

print('Yes! You Win!')

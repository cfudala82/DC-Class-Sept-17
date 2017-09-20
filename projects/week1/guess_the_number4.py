import random
que = 'n'

while True:
    my_random_number = random.randint(1, 10)
    print('Random', my_random_number)
    count = 5

    print('I am thinking of a number from 1 to 10.')
    print('You have', count, 'guesses left.')

    while True:
        prompt = int(input("What's the number? "))

        if prompt < my_random_number:
            print(prompt, 'is too low.')

        elif prompt > my_random_number:
            print(prompt, 'is too high.')

        elif prompt == my_random_number:
            print('Yes! You Win!')
            que = input('Do you want to play again? (Y or N) ')
            break

        print('You have', count, 'guesses left.')
        count -= 1

        if count == 0:
            print('You ran out of guesses!')
            que = input('Do you want to play again? (Y or N) ')

        if que != 'y':
            break

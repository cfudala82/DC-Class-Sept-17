secret_number = 5
print('I am thinking of a number from 1 to 10.')
prompt = int(input("What's the number? "))

while prompt != secret_number:
        print('Nope, try again.')
        prompt = int(input("What's the number? "))

print('Yes! You Win!')

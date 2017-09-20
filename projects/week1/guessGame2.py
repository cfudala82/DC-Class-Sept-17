print('Guess Game 2')
count =50
print('Is your number', count, '?')
response = input('high, low, yes? ')
for i in range(0, 100):
    if response == 'high':
        count -= 1
        print('Is this your number', count, "?")
        response = input('high, low, yes? ')
    if response == 'low':
        count += 1
        print('Is this your number', count, "?")
        response = input('high, low, yes? ')
    if response == 'yes':
        print('Got it')
        break

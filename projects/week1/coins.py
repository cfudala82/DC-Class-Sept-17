count = 0
print('You have ', count, ' coins.', sep='')
prompt = input('Do you want another? ')

while prompt == 'yes':
    count += 1
    print('You have ', count, ' coins.', sep='')
    prompt = input('Do you want another? ')

print('Bye')

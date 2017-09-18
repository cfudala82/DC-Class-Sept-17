counter = 1
sec_counter = 4
for i in range(0, 4):
    print(' ' * sec_counter, '*' * counter, sep='')
    counter += 2
    sec_counter -= 1

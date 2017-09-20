sec_height = int(input('Height? '))
counter = 1
sec_counter = sec_height
for i in range(0, sec_height):
    print(' ' * sec_counter, '*' * counter, sep='')
    counter += 2
    sec_counter -= 1

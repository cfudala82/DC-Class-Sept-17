width = int(input('Width? '))
height = int(input('Height? '))
space = ' '
remove_star = height - 2
linesSpaces = width - 2
print('*' * width)

for i in range(0, remove_star):
    print('*', space * linesSpaces, '*', sep='')

print('*' * width)



# print('1.1-10')
# for i in range(0, 10):
    # print(i + 1)

# print('2.n-m')
# m = int(input('Start from:  '))
# n = int(input('End on: ')) + 1
# for i in range(m, n):
    # print(i)

# print('3.Odd Numbers')
# for i in range(0, 10):
    # if i % 2 != 0:
        # print(i)

# print('4.Print a Square')
# line = '*****'
# for i in range(0, 5):
    # print(line)

# print('5.Print a Square II')
# user_N = int(input('How big is the square? '))
# for i in range(0, user_N):
    # user_line = '*' * user_N
    # print(user_line)

print('6. Print a Box')
width = int(input('Width? '))
height = int(input('Height? '))
space = ' '
remove_star = height - 2
linesSpaces = width - 2
print('*' * width)

for i in range(0, remove_star):
    print('*', space * linesSpaces, '*', sep='')

print('*' * width)

print('7. Print a Triangle')
counter = 1
sec_counter = 4
for i in range(0, 4):
    print(' ' * sec_counter, '*' * counter, sep='')
    counter += 2
    sec_counter -= 1

print('8. Print a Triangle II')
sec_height = int(input('Height? '))
counter = 1
sec_counter = sec_height
for i in range(0, sec_height):
    print(' ' * sec_counter, '*' * counter, sep='')
    counter += 2
    sec_counter -= 1

print('9.Multiplication Table')
for i in range(1, 11):
    for j in range(1, 11):
        multiply = i * j
        print(i, 'X', j, '=', multiply)

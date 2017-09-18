# import matplotlib.pyplot as plot
# import math

# print('1.Hello')
# def hello (name):
    # print('Hello {}'.format(name))

# hello('Igor')

# print('2.y=x+1')
# def f(x):
    # return x + 1

# xs = list(range(-3, 4))
# ys = []
# for x in xs:
    # ys.append(f(x))

# plot.plot(xs, ys)
# plot.show()

# print('3.Square of X')
# def f(x):
#     return x * x
#
# xs = list(range(-100, 100))
# ys = []
# # for x in xs:
#     ys.append(f(x))
#
# plot.plot(xs, ys)
# plot.show()

# print('4.Odd or Even')

# def f(x):
    # return x

# xs = list(range(-5, 5))
# ys = []
# for x in xs:
    # if (x % 2) == 0:
        # x = 1
        # ys.append(f(x))

    # elif (x % 2) != 0:
        # x = -1
        # ys.append(f(x))

# plot.bar(xs, ys)
# plot.show()

# print('5.Sine')
# import matplotlib.pyplot as plot
#
# def f(x):
#     return math.sin(x)
#
# xs = list(range(-5, 5))
# ys = []
# for x in xs:
#     ys.append(f(x))
#
# plot.plot(xs, ys)
# plot.show()

# print('6.sine 2')
#
# import matplotlib.pyplot as plot
# from numpy import arange
#
# def f(x):
#     return math.sin(x)
#
# xs = list(arange(-5, 5, .1))
# ys = []
# for x in xs:
#     ys.append(f(x))
#
# plot.plot(xs, ys)
# plot.show()

# print('7.Degree Conversion')
# import matplotlib.pyplot as plot
# # from numpy import arange
#
# def f(x):
#     return ((x * 1.8) + 32)
#
# xs = list(range(0, 20))
# ys = []
# for x in xs:
#     ys.append(f(x))
#
# plot.plot(xs, ys)
# plot.show()

# print('8.Play Again')

# def playAgain():
#     answer = input('Do you want to play again? (Y or N)')
#     if answer == 'Y':
#         return True
#     elif answer == 'N':
#         return False
# print(playAgain())

print('9.Play again? Again.')

def playAgain():
    answer = str(input('Do you want to play again? (Y or N): '))

    while True:
        if answer == 'Y' or 'y' or 'N' or 'n':
            break
        else:
            print('Invalid Input.')
            answer = str(input('Do you want to play again? (Y or N): '))

    if answer == 'Y':
        return True
    elif answer == 'y':
        return True
    elif answer == 'N':
        return False
    elif answer == 'n':
        return False

print(playAgain())

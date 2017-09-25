"""Week 2 Friday's Challenge 1: Collatz Conjecture"""
stringNum = ""
newNum = 0

num = int(input("Enter a number for Collatz Conjecture: "))

while True:
    oddOrEven = num % 2
    if oddOrEven == 0:
        newNum = num / 2
        stringNum = stringNum + (str(newNum) + " ")
        num =  newNum
    elif oddOrEven != 0:
        newNum = (3 * num) + 1
        stringNum = stringNum + (str(newNum) + " ")
        num = newNum
    else:
        stringNum = stringNum + (str(newNum) + " ")
    if num <= 1:
        break

print(stringNum)

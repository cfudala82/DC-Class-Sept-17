
################### NOT FINISHED ##########################

sequence = []
i = 0
x = 1
y = 2
z = 0

while True:
    sequence.append(x)
    sequence.append(y)
    z = x + y
    sequence.append(z)
    x = y
    print(x)
    y = z
    print(y)
    z = x + y
    print(z)
    if z > 10:
        break
print(sequence)
################### NOT FINISHED ##########################

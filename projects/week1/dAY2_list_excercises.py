nums = [1, 30, -3, 5, 49, 2, 0, 9, 299, -30]
nums2 = []
nums3 = []
nums4 = []
singleFactor = 2
j = 0
m1 = [[1, 3, 5], [2, 8, -1]]
m2 = [[8, 4, 3], [4, 1, -4]]
m3 = []

print(nums)

print('Sum: ', sum(nums))

print('Largest number: ', max(nums))

print('Smallest number: ', min(nums))

print('Even numbers: ')
for i in nums:
    if  i % 2 == 0:
        print(i)

print('Positive numbers I: ')
for i in nums:
    if i > 0:
        print(i)

print("Positive Numbers II: ")
for i in nums:
    if i > 0:
        nums2.append(i)
print('nums2 = ', nums2)

print('Multiply a list: ')
for i in nums:
    nums3.append(i * singleFactor)
print(nums3)

print('Multiply Vectors: ')
for i in range(0, len(nums)):
    nums4.append(nums[i] * nums3[i])
print(nums4)

# print('m1 = ', m1)
# print('m2 = ', m2 )

# print('9.Matrix Addition: ')
# for i in range(0, len(m1)):
    # m3.append(m1 + m2)
# print(m3)

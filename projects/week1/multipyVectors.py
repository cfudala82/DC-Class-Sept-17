nums = [1, 30, -3, 5, 49, 2, 0, 9, 299, -30]
nums3 = [2, 60, -6, 10, 98, 4, 0, 18, 598, -60]
nums4 = []

for i in range(0, len(nums)):
    nums4.append(nums[i] * nums3[i])
print(nums4)

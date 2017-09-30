# A program that takes a JSON file name as input and plots the X,Y data.
import json

data = {}

data.append({
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4]
})

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)


# {
#   "data": [
#     [1, 1],
#     [2, 2],
#     [3, 3],
#     [4, 4]
#   ]
# }

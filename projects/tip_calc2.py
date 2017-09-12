totalBillAmount = int(input('Total bill amount? '))
levelOfService = input('Level of service? ')
splitHowMany = input('Split how many ways? ')

if levelOfService == 'good':
  tip = .2
  totalAmount = (totalBillAmount * tip) + totalBillAmount
  print("$", "{:.2f}".format(totalAmount))
elif levelOfService == 'fair':
  tip = .15
  totalAmount = (totalBillAmount * tip) + totalBillAmount
  print("$", "{:.2f}".format(totalAmount))
elif levelOfService == 'bad':
  tip = .1
  totalAmount = (totalBillAmount * tip) + totalBillAmount
  print("$", "{:.2f}".format(totalAmount))
else:
  print("Please select good, bad, or fair for service and try again.")

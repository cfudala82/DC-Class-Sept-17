totalBillAmount = int(input('Total bill amount? '))
levelOfService = input('Level of service? ')
tip = 0

if levelOfService == 'good':
  tip = .2
  totalAmount = (totalBillAmount * tip) + totalBillAmount
elif levelOfService == 'fair':
  tip = .15
  totalAmount = (totalBillAmount * tip) + totalBillAmount
elif levelOfService == 'bad':
  tip = .1
  totalAmount = (totalBillAmount * tip) + totalBillAmount
else:
  print("Please select good, bad, or fair for service and try again.")
  totalAmount = 0
  
print("${:.2f}".format(totalAmount))

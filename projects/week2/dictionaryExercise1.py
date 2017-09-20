phonebook_dict = {'Alice': '703-493-1834', 'Bob': '857-384-1234',
'Elizabeth': '484-584-2923'}

print(phonebook_dict.get('Elizabeth'))  #1

phonebook_dict['Kareem'] = ('938-345-2345')  #2

del phonebook_dict['Alice']  #3

phonebook_dict['Bob'] = ('968-345-1234')  #4

print(phonebook_dict)  #5

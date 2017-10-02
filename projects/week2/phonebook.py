# Phonebook app

# Ask them for the person's name, and then look up the person's phone number by
# the given name and print it to the screen.
def lookUp():
    name = input('Name: ')
    print('Found entry for ' + name + ': ' + phoneBook[name])

# Set an entry, prompt user for the person's name and the person's phone number.
def setNameNumber():
    name = input('Name: ')
    phoneNumber = input('Phone number: ')
    phoneBook[name] = phoneNumber
    print('Entry stored for ' + name +'.')

# Delete an entry, you will prompt user for person's name and delete the given
# person's entry.
def delete():
    name = input('Name: ')
    phoneBook.pop(name)
    print('Deleted entry for ' + name +'.')

# List all entries, go through all entries in the dictionary and print each out
# to the terminal.
def listAll():
    for key in phoneBook:
        print('Found entry for ' + key + ': ' + phoneBook[key])

# Quit, end the program.
def quit():
    a = 1

phoneBook = {}

while True:

    print('Electronic Phone Book')
    print('=====================')
    print('1. Look up an entry')
    print('2. Set an entry')
    print('3. Delete an entry')
    print('4. List all entries')
    print('5. Quit')
    
    selection = int(input('What do you want to do (1-5)?: '))

    if selection == 1:
        lookUp()
    elif selection == 2:
        setNameNumber()
    elif selection == 3:
        delete()
    elif selection == 4:
        listAll()
    elif selection == 5:
        print('Bye')
        break

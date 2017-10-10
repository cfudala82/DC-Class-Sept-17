class Person:
    """
    Person class saves names, emails, phone numbers, and friends to an object.
    Method greet() greets one person from another.  Method print_contact_info
    prints objects email & phone number.
    """

    def __init__(self, name, email, phone):
        friends = []
        count = 0
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = friends
        self.count = count

    def greeting_count(self):
        self.count += 1

    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count()

    def print_contact_info(self):
        print(self.name, "'s email: ", self.email, ' ',
              self.name, "'s phone: ", self.phone, sep='')

    def add_friends(self, addFriend):
        self.friends.append(addFriend)

    def __str__(self):
        return 'Person: {} {} {}'.format(self.name, self.email, self.phone)


sonny = Person('Sonny', 'Sonny@gmail.com', '222-333-4455')
jordan = Person('Jordan', 'Jordan@gmail.com', '999-444-6677')

sonny.print_contact_info()
jordan.print_contact_info()

jordan.add_friends(sonny)
sonny.add_friends(jordan)

print(len(jordan.friends))
print(len(sonny.friends))

sonny.greet(jordan)
jordan.greet(sonny)

sonny.greet(jordan)
print(sonny.count)

sonny.greet(jordan)
print(sonny.count)

jordan.greet(sonny)
print(jordan.count)

print(jordan)
print(str(jordan))


class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print(self.year, self.make, self.model)


car = Vehicle('Nissan', 'Leaf', '2015')

car.print_info()

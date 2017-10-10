count = 0


class Person:
    """Saves an object with persons name, email, and phone"""
    def __init__(self, name, email, phone):
        friends = []
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = friends

    def print_contact_info(self):
        print("Sonny's email: {}, Sonny's phone number: {}"
              .format(sonny.email, sonny.phone, sep=''))

    def greeting_count(self):
        global count
        self.count += 1

# A function that prints a greeting from one person to another.
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count()


print(' ')

# Instantiates an object for a person and stores name, email, and phone into
# local fariables.
sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

# prints a string, jordan says hello to sonny and vice versa.
sonny.greet(jordan)
print(count)
sonny.greet(jordan)
print(count)
sonny.greet(jordan)
print(count)
# jordan.greet(sonny)

# prints name, email and phone of Sonny and Jordan
#       print(sonny.name, sonny.email, sonny.phone)
#       print(jordan.name, jordan.email, jordan.phone)
sonny.print_contact_info()

jordan.friends.append(sonny)
sonny.friends.append(jordan)

print(len(jordan.friends))


# Count number of greetings
#
# We want to count the number of times a person has greeted someone. To do this
# , we'll add another attribute, call it say greeting_count, and initialize it
# to 0.
# Then each time the greet method is called, we'll increment greeting_count by
# 1.
#
# >>> sonny.greeting_count
# 0
# >>> sonny.greet(jordan)
# >>> sonny.greeting_count
# 1
# >>> sonny.greet(jordan)
# >>> sonny.greeting_count
# 2

print('     ')


class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print(car.year, car.make, car.model)


car = Vehicle('Nissan', 'Leaf', '2015')

car.print_info()

print('     ')

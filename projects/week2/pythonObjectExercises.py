class Person:
    """Saves an object with persons name, email, and phone"""
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

# A function that prints a greeting from one person to another.
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))

# Instantiates an object for a person and stores name, email, and phone into
# local variables.
sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

# prints a string, jordan says hello to sonny and vice versa.
sonny.greet(jordan)
jordan.greet(sonny)

# prints name, email and phone of Sonny and Jordan
print(sonny.name, sonny.email, sonny.phone)
print(jordan.name, jordan.email, jordan.phone)

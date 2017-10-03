# Add a method
#
# Add a print_info method to the Vehicle class. It will print out the vehicle's information like so:
#
# >>> car.print_info()
# 2015 Nissan Leaf
# Add a method 2
#
# Go back to the Person class. Add a print_contact_info method to the Person class that will print out
# the contact info for a object instance of Person. You will use it thus:
#
#
# >>> sonny.print_contact_info()
# Sonny's email: sonny@hotmail.com, Sonny's phone number: 483-485-4948
# Add an instance variable (attribute)
#
# Add a friends instance variable (attribute) to the Person class. You will initialize it to an empty list
# within the constructor __init__. Once you've done this you should be able to add a friend to a person using list's append method:
#
#
# jordan.friends.append(sonny)
# sonny.friends.append(jordan)
# You should also be able to get the number of friends a person has by using the len function on his friends:

# >>> len(jordan.friends)
1


class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print(car.year, car.make, car.model)

car = Vehicle('Nissan', 'Leaf', '2015')

car.print_info()

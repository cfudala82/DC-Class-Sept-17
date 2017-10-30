function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

sonny.greet(jordan);
jordan.greet(sonny);

console.log(jordan.name + "'s contact info: \n" + 'Email: ' + sonny.email + '\nPhone: ' + sonny.phone + '\n');
console.log(jordan.name + "'s contact info: \n" + 'Email: ' + jordan.email + '\nPhone: ' + jordan.phone + '\n');

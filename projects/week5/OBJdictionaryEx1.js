// Phonebook app:  get and insert data into a map.
var phonebookMap = new Map ();
phonebookMap.set('Alice', '703-493-1834');
phonebookMap.set('Bob', '857-384-1234');
phonebookMap.set('Elizabeth', '484-584-2923');

// Print Elizabeth's phone number.
console.log(phonebookMap.get('Elizabeth'));

// Add Kareem's number.
phonebookMap.set('Kareem', '938-489-1234');

// Delete Alice
phonebookMap.delete('Alice');

// Change Bob's number
phonebookMap.set('Bob', '968-345-2345');

// Access map with variable.  List all phonenumbers with for...in loop.
var personName = 'Elizabeth'
phonebookMap.get(personName);

for (var key of phonebookMap.keys()) {
  console.log(phonebookMap.get(key));
}

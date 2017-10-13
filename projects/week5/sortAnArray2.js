// A function that sorts an array by how long each name is, shortest name first.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

people.sort(function(a, b) {
  console.log(a);
  console.log(b);
  console.log(a.length - b.length);
  return a.length - b.length;
});
console.log(people);

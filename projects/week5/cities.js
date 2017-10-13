// A function which takes an array of city objects as input and returns a new
// array containing the cities whose temperature is cooler than 70 degrees.
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Orland Hills', temperature: 70.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 },
  { name: 'Chicago', temperature: 90.0 }
];

function citiesTemp (cities) {
  var seventyDegCities = [];

  cities.forEach(function (city) {
    if (city.temperature < 70.0) {
      seventyDegCities.push(city);
    }
  });
return seventyDegCities
}

console.log(citiesTemp(cities));

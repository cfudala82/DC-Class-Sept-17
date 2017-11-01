class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  addFriend (friend) {
    this.friends.push(friend);
  }
  createGreeting (other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  }
  greet (other) {
      console.log(this.createGreeting(other));
  }
  lazyGreet (other) {
    setTimeout(()=> {
      console.log(this.createGreeting(other));
    }, 2000);
  }
  createGreetingsForFriends () {
    let greetings = this.friends.map((friend)=>{
      return this.createGreeting(friend);
    })
    return greetings;
  }
}

var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
console.log(alfie.createGreetingsForFriends());

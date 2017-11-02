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
}

var me = new Person('Chris');
var mo = new Person('Mo');
var jerry = new Person('Jerry');

me.addFriend(mo);
me.addFriend(jerry);
me.greet(mo);
mo.greet(me);
mo.lazyGreet(me);

console.log(me);

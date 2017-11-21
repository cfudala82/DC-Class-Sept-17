import React, { Component } from 'react';
import Hello from './Hello';

class HelloList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends : [
        {id: 1, name: John, age: 22},
        {id: 2, name: Dan, age: 32},
        {id: 3, name: Mark, age: 20},
        {id: 4, name: Ryan, age: 19},
        {id: 5, name: Melissa, age: 16},
        {id: 6, name: Sam, age: 54},
        {id: 7, name: Rob, age: 12},
        {id: 8, name: George, age: 65},
        {id: 9, name: Laura, age: 90},
        {id: 10, name: Steve, age: 31},
        {id: 11, name: Samantha, age: 21}

      ]
    };
  }

  render() {
    return <ul>
  {this.state.friends.map((friend) =>
      <li key={friend.id}>{friend.name}</li>
  )}
</ul>
  }
}

export default HelloList;

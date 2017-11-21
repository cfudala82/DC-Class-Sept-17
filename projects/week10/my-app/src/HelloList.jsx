import React, { Component } from 'react';
import HelloMessage from './Hello';

class HelloList extends Component {
  constructor (props) {
    super (props);

    this.state = {
      date: new Date(),
      people: [
        {age: 19, name: 'John'},
        {age: 32, name: 'Mark'},
        {age: 21, name: 'Mary'},
        {age: 20, name: 'Tim'},
        {age: 26, name: 'Melanie'},
        {age: 18, name: 'Samantha'},
        {age: 30, name: 'Don'},
        {age: 19, name: 'Eric'}
      ]
    }
  }

  handleClick (event, person, selected) {
    console.log('Parent', person, selected);
  }

  render () {
    return <ul>
      {this.state.people.map((person) =>
        <li key={person.id}>
          <HelloMessage name={person.name} callback={this.handleClick} />
        </li>
      )}
    </ul>
  }
}

export default HelloList;

import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('Testing ', this.props.contacts);
    return (
      <div>
        {this.props.contacts.map((contact) => {
          return <p>{contact.name + ', ' + contact.email + ', ' + contact.phone + ', ' + contact.address + ', ' + contact.city + ', ' + contact.state + ', ' + contact.zip + '. '}</p>
        })}
      </div>
    );
  }
}

export default ContactList;

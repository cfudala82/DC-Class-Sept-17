import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './App.jsx'
import './contactList.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(obj);
    var obj = this.props.contacts;
    obj.sort(this.props.contacts.name);

    return (
      <Card className="md-card">
        <CardTitle title="My Contacts" />
        <CardText>
          <ul className='list'>
            {this.state.obj.map((objs) => {
              return <li key={objs.name}>{'Name: ' + objs.name  + ' City: ' + objs.city + ' State: ' + objs.state}
              </li>
            })}
          </ul>
        </CardText>
      </Card>
    );
  }
}

export default ContactList;

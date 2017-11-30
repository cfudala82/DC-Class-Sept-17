import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {tealA100, tealA200, tealA300,darkBlack} from 'material-ui/styles/colors';
import _ from 'lodash';
import uid from 'uid';
import MyForm from './MyForm';
import ContactList from './contactList';
import './App.css';

const theme = getMuiTheme({
  palette: {
    primary1Color: tealA200,
    iconColor: tealA100,
    primary3Color: tealA300,
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    shadowColor: darkBlack
  }
});

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      contacts: [{key: uid(10), name: 'Mike', email: 'mike@email.com', phone: '123-456-7891', address: '1234 Street Ave.', city: 'Houston', state: 'TX', zip: '77665'}
    ]};
  }

  add_contact (c) {
    var contacts = this.state.contacts;
    contacts.push(c);

    var sorted_contacts = _.orderBy(contacts, [user => user.name.toLowerCase()]);
    console.log(sorted_contacts);

    this.setState({contacts: sorted_contacts});
  }

  deleteContact = (key) => {
    // deete contact by key or unqiue value from state array
    console.log(key);
  }

  render() {


    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <MyForm add_contact={(c) => this.add_contact(c)} />
            <ContactList contacts={this.state.contacts} clickDelete={this.deleteContact} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

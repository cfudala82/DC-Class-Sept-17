import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {tealA200, darkBlack} from 'material-ui/styles/colors';
import MyForm from './MyForm';
import ContactList from './contactList';
import './App.css';

const theme = getMuiTheme({
  palette: {
    primary1Color: tealA200,
    textColor: darkBlack,
    alternateTextColor: darkBlack
  }
});

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      contacts: [{name: 'Mike', email: 'mike@email.com', phone: '123-456-7891', address: '1234 Street Ave.', city: 'Houston', state: 'TX', zip: '77665'}]
    }
  }

  add_contact (c) {
    var contacts = this.state.contacts;
    contacts.push(c)
    this.setState({contacts: contacts});
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <MyForm add_contact={(c) => this.add_contact(c)}/>
            <ContactList contacts={this.state.contacts} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

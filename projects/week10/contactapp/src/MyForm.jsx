import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import uid from 'uid';
import './MyForm.css';



class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', phone: '', address: '', city: '', state: '', zip: ''};
  }

  update_state (event, key) {
    this.setState({[key]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add_contact({
      key: uid(10),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    });
  }


  render() {
    return (
      <div>
        <AppBar title="My Contact App" />
          <form
            className='new-contact'
            onSubmit={event => this.handleSubmit(event)}
          >
            <div>
              <TextField floatingLabelText="Your Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}
              />
            </div>
            <div>
              <TextField floatingLabelText="Your Email"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'email')}
              />
            </div>
            <div>
              <TextField floatingLabelText="Your Phone Number"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'phone')}
              />
            </div>
            <div>
              <TextField floatingLabelText="Your Address"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'address')}
              />
            </div>
            <div>
              <TextField floatingLabelText="Your City"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'city')}
              />
            </div>
            <div>
              <TextField floatingLabelText="Your State"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'state')}
              />
            </div>
            <div>
              <TextField floatingLabelText="Your Zip Code"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'zip')}
              />
            </div>
            <div className='button'>
              <RaisedButton label="Submit" type="submit" primary={true}/>
            </div>
          </form>
      </div>
    );
  }
}

export default MyForm;

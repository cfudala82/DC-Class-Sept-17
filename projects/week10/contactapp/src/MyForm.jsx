import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './MyForm.css';



class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', phone: '', address: '', city: '', state: '', zip: ''};
  }


  render() {
    return (
      <div>
        <AppBar title="My Contact App" />
          <div className='new-contact'>
            <div>
              <TextField floatingLabelText="Your Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
            <div>
              <TextField floatingLabelText="Your Email"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
            <div>
              <TextField floatingLabelText="Your Phone Number"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
            <div>
              <TextField floatingLabelText="Your Address"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
            <div>
              <TextField floatingLabelText="Your City"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
            <div>
              <TextField floatingLabelText="Your State"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
            <div>
              <TextField floatingLabelText="Your Zip Code"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
            </div>
          </div>
      </div>
    );
  }
}

export default MyForm;

import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import {tealA200, tealA100, darkBlack} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Avatar from 'material-ui/Avatar';
import './contactList.css';

const styles = {
  chip: {
    backgroundColor: tealA200,
    margin: 4
  },
  // wrapper: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
};


class ContactList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clickedTracker: {}
    }
  }

  handleClick(key) {
    let clickedTracker = this.state.clickedTracker
    // console.log('handleClick', clickedTracker)
    if (clickedTracker[key]) {
      clickedTracker[key] = false
    } else {
      clickedTracker[key] = true
    }
    this.setState({clickedTracker: clickedTracker})
  }

  render () {

    let renderList = this.props.contacts.map((contact) => {
      if (this.state.clickedTracker[contact.key]) {
        return (<Chip
          onRequestDelete={() => console.log('Hello')}
          style={styles.chip}
          onClick={() => this.handleClick(contact.key)}
          key={contact.key}>
          {contact.name  + ': ' + contact.email + ', ' + contact.phone + ', ' + contact.address + ', ' + contact.city + ', ' + contact.state + ', ' + contact.zip}
      </Chip>)
    } else {
      return (
        <Chip
          onRequestDelete={() => console.log('Goodbye')}
          style={styles.chip}
          onClick={() => this.handleClick(contact.key)}
          key={contact.key}>
          <Avatar icon={<SvgIconFace />} color={darkBlack} hoverColor={tealA100} />
          {contact.name  + ': ' + contact.city + ', ' + contact.state}
      </Chip>)
    }

    })

    return (
      <Card className="md-card">
        <CardTitle
          style={styles.chip}
          title="My Contacts" />
        <CardText>
          <List>
            {renderList}
          </List>
        </CardText>
      </Card>
    );
  }
}

export default ContactList;

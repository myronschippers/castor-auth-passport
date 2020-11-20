import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import UserEmployeesList from '../UserEmployeesList/UserEmployeesList';
import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h2 id="welcome">Welcome, {this.props.store.user.username}!</h2>
        <p>Your ID is: {this.props.store.user.id}</p>

        <h3>Your Employees</h3>
        <UserEmployeesList />
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

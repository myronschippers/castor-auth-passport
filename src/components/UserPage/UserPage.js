import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import UserEmployeesList from '../UserEmployeesList/UserEmployeesList';
import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_EMPLOYEES',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h2 id="welcome">Welcome, {this.props.store.user.username}!</h2>
        <p>Your ID is: {this.props.store.user.id}</p>

        {this.props.store.employees.length === 0 ? (
          <h3>Work, Work, Work</h3>
        ) : (
          <div>
            <h3>Your Employees</h3>
            <UserEmployeesList />
          </div>
        )}

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

import React, { Component } from 'react';

// CUSTOM COMPONENTS
import UserEmployeeItem from '../UserEmployeeItem/UserEmployeeItem';

class UserEmployeesList extends Component {
  render() {
    const displayedEmployees = [].map((item, index) => {
      return <UserEmployeeItem employee={item} key={index} />;
    });
    return <ul>{displayedEmployees}</ul>;
  }
}

export default UserEmployeesList;

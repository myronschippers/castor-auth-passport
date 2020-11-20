import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import UserEmployeeItem from '../UserEmployeeItem/UserEmployeeItem';

class UserEmployeesList extends Component {
  render() {
    const displayedEmployees = this.props.store.employees.map((item, index) => {
      return <UserEmployeeItem employee={item} key={index} />;
    });
    return <ul>{displayedEmployees}</ul>;
  }
}

export default connect(mapStoreToProps)(UserEmployeesList);

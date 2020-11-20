import React, { Component } from 'react';

class UserEmployeeItem extends Component {
  render() {
    return (
      <li>
        {this.props.employee.username}, {this.props.employee.label}
      </li>
    );
  }
}

export default UserEmployeeItem;

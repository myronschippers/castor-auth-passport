import React, { Component } from 'react';

class UserEmployeeItem extends Component {
  render() {
    return (
      <li>
        {this.props.employee.name}, {this.props.employee.role}
      </li>
    );
  }
}

export default UserEmployeeItem;

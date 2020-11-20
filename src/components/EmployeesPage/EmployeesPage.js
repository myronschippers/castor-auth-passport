import React, { Component } from 'react';

// CUSTOM COMPONENTS
import EmployeeList from '../EmployeeList/EmployeeList';

class EmployeesPage extends Component {
  render() {
    return (
      <div>
        <h2>Employee Review</h2>
        <EmployeeList />
      </div>
    );
  }
}

export default EmployeesPage;

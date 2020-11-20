import React from 'react';

function EmployeeItem(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.role}</td>
      <td>{props.employee.rating}</td>
      <td>{props.employee.comments}</td>
      <td>
        <button>Review Employee</button>
      </td>
    </tr>
  );
}

export default EmployeeItem;

import React from 'react';

function EmployeeItem(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.role}</td>
      <td>{props.employee.average_review}</td>
      <td>
        <button>View Comments</button>
      </td>
    </tr>
  );
}

export default EmployeeItem;

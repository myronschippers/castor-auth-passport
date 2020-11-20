import React from 'react';

// CUSTOM COMPONENTS
import EmployeeItem from '../EmployeeItem/EmployeeItem';

function EmployeeList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Average Review</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[].map((item, index) => {
          return <EmployeeItem employee={item} key={index} />;
        })}
      </tbody>
    </table>
  );
}

export default EmployeeList;

import React from "react";

const EmployeeRow = ({ picture, name, phone, email, dob }) => {
  return (
    <tr>
      <td>
        <img src={picture.thumbnail} alt="employee photo"></img>
      </td>
      <td>{name.first} {name.last}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob.date.substring(0,10)}</td>
    </tr>
  );
};

export default EmployeeRow;

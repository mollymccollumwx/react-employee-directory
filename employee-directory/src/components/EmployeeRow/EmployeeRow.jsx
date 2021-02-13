import React from "react";

const EmployeeRow = ({ image, name, phone, email, DOB }) => {
  return (
    <tr>
      <td>
        <img src={image} alt="employee photo"></img>
      </td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{DOB}</td>
    </tr>
  );
};

export default EmployeeRow;

import React from "react";

function showEmployee(props) {
  return (
    <tr>
      <th scope="row">
        <img src={props.photo} />
      </th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.city}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default showEmployee;

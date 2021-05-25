import React from "react";
// import "./style.css"

// Set table with columns and rows, pass props, return the table with sorts
const EmployeeTable = (props) => {
  return (
    <table className="table table-dark table-striped table-hover text-center table-sortable">
      {/* header of table */}
      <thead>
        <tr>
          <th scope="col">Image</th>
          
          <th scope="col" data-name="name" data-sortable="true">
            <span onClick={() => props.sortBy("name", "last", "first")}>
              Name
            </span>
          </th>

          <th scope="col"><span onClick={() => props.sortBy("phone")}>Phone</span></th>

          <th scope = "col"><span onClick ={() => props.sortBy("email")}>Email</span></th>

          <th scope ="col"><span onClick ={() => props.sortBy("dob","date")}>DOB</span></th>
        </tr>
      </thead>
      {/* body of table */}
      <tbody>functions filter and make new array of search</tbody>
    </table>
  );
};

export default EmployeeTable;

import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow"

class Employees extends Component {
  state = {
    employees: [
      {
        id: 1,
        image: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "Arnold Palmer",
        phone: "867-5309",
        email: "arnold@test.com",
        DOB: "01-02-1990",
      },
      {
        id: 2,
        image: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "Bob Test",
        phone: "867-5309",
        email: "bob@test.com",
        DOB: "02-01-1990",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <EmployeeRow {...employee}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;

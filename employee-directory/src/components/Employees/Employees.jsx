import React, { Component } from "react";

class Employees extends Component {

    state= {
        employees: {
            id: 1,
            image: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
            name: "Arnold Palmer",
            phone: "867-5309",
            email: "arnold@test.com",
            DOB: "01-02-1990"
        }
    }
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
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>
                    <img
                      src={this.state.employees.image}
                      alt="employee photo"
                    ></img>
                  </td>
                  <td>{this.state.employees.name}</td>
                  <td>{this.state.employees.phone}</td>
                  <td>{this.state.employees.email}</td>
                  <td>{this.state.employees.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;

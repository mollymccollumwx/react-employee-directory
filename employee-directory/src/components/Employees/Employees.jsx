import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import axios from "axios";

class Employees extends Component {
  state = {
    employees: [],
 
  };

  componentDidMount (){
    this.getEmployees();
  }
  getEmployees = () => {
    axios.get("https://randomuser.me/api/?results=25&nat=us").then((response) => {
      console.log(response.data.results);
      this.setState({employees: response.data.results});
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
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
                  <EmployeeRow {...employee} key={employee.id} />
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

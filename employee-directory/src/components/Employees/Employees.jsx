import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

class Employees extends Component {
  state = {
    employees: [],
    sortByName: "",
    sortedEmployees: [],
    search: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=25&nat=us")
      .then((response) => {
        console.log(response.data.results);
        this.setState({ employees: response.data.results });
      });
  };

  handleNameSort = () => {
    console.log("you clicked the name sort arrow");
    console.log(this.state.sortByName);
    let sortedNames = this.state.employees;

    if (this.state.sortByName === "") {
      sortedNames.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
      this.setState({ employees: sortedNames, sortByName: "aToZ" });
    } else if (this.state.sortByName === "aToZ") {
      sortedNames.sort((a, b) => {
        return b.name.first.localeCompare(a.name.first);
      });
      this.setState({ employees: sortedNames, sortByName: "zToA" });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col" onClick={this.handleNameSort}>
                    Name <i className="fas fa-sort-down"></i>
                  </th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <EmployeeRow {...employee} key={employee.id.value} />
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

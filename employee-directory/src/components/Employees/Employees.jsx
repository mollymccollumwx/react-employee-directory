import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

class Employees extends Component {
  state = {
    employees: [],
    sortByName: "",
    search: "",
    filteredEmployees: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=25&nat=us")
      .then((response) => {
        this.setState({ employees: response.data.results });
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

    // const newSearch = {
    //   search: this.state.search,
    // };



    // });
    // const filteredEmployees = this.state.employees.filter((employee => {
    //   return newSearch.indexOf(employee.name.first) > -1 || newSearch.indexOf(employee.name.last) > -1
    // });

    const filteredEmployees = this.state.employees;

    filteredEmployees.filter((employee) => {
      // console.log(employee);
      // console.log(value);
      const name = employee.name.first.toLowerCase();
      const newSearch = value.toLowerCase().trim();

      // console.log(name);
      // console.log(newSearch);
     
      return name.includes(newSearch); 
    });

    console.log(filteredEmployees);

    this.setState({
      filteredEmployees: filteredEmployees,
    })
  };

  handleNameSort = () => {
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

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <SearchBar
              submitHandler ={this.submitHandler}
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
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

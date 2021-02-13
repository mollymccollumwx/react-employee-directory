import React, { Component } from "react";

class Employees extends Component {
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
                  <td><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="employee photo"></img></td>
                  <td>Arnold Palmer</td>
                  <td>867-5309</td>
                  <td>arnold@test.com</td>
                  <td>01-02-1990</td>

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

import React, { Component } from "react";
import Employees from "../employees";
import API from "../../utils/API";
import "./style.css";

class table extends Component {
  state = {
    employees: [],
    sortEmployees: [],
  };

  //   on page load
  componentDidMount() {
    API.search().then((res) => {
      console.log(res);

      this.setState({
        employees: res.data.results,
        sortEmployees: res.data.results,
      });
    });
  }
  // Input Change
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.firstName);
  };

  searchByName = () => {
    const filtered = this.state.employees.filter(
      (obj) => obj.name.first === this.state.firstName
    );
    this.setState({ employees: filtered });
  };

  // Sort top to bottom vs bottom to top
  handleFirstName = () => {
    const sort = this.state.sortEmployees.sort((k, h) => {
      if (k.name.first > h.name.first) {
        return 1;
      } else if (k.name.first < h.name.first) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ sortEmployees: sort });
  };
  handleLastName = () => {
    const sort = this.state.sortEmployees.sort((k, h) => {
      if (k.name.last > h.name.last) {
        return 1;
      } else if (k.name.last < h.name.last) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ sortEmployees: sort });
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Name" name="search" />
          <button className="btn-primary" type="submit">
            Search
          </button>
        </form>
        <table className="table table-primary table-striped">
          <thead className="thead">
            <tr className="tablehead">
              <th scope="col">Photo</th>
              <th
                scope="col"
                onClick={this.handleFirstName}
                className="firstName"
              >
                First Name
              </th>
              <th
                scope="col"
                onClick={this.handleLastName}
                className="lastName"
              >
                Last Name
              </th>
              <th
                scope="col"
                onClick={this.handleLocation}
                className="locationState"
              >
                Location
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <Employees
                key={employee.login.uuid}
                photo={employee.picture.thumbnail}
                firstName={employee.name.first}
                lastName={employee.name.last}
                city={employee.location.city}
                state={employee.location.state}
                email={employee.email}
                phone={employee.cell}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default table;

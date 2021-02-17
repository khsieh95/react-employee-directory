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
  handleFirstName = () => {
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
    return <div></div>;
  }
}

export default table;

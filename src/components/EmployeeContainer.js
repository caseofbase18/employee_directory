import React, { Component } from "react";

import App from '../utils/App.js';
import Table from "./Table";
import Search from "./Search";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: []
  };

  // When this component mounts, get a list of employees
  componentDidMount() {
    this.getEmployees()
  }

  // AJAX call to randomuser API
  getEmployees = () => {
    App.retrieve()
      .then(response => {
        //console.log(response)
        //console.log(response.data)
        console.log(response.data.results)
        // console.log(response.data.results[0])

        this.setState({ employees: response.data.results })

      }).catch(err => console.log(err));
  };

  // code that will listen to events on the page and update state
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  // When the form is submitted, search the employees array for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDirectory(this.state.search);
  };
  searchDirectory = event => {

  }

  handleEmployeeSlice = () => {
    const employees = this.state.employees;
    this.setState({ employees: employees.slice(15) })
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleEmployeeSlice}>Slice</button>

        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <Table employees={this.state.employees} />

      </div>
    );
  }
}

export default EmployeeContainer;
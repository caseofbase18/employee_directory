import React, { Component } from "react";

import App from '../utils/App.js';
import Table from "./Table";
import Search from "./Search";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: []
  };

  componentDidMount() {
    this.getEmployees()
  }

  getEmployees = () => {
    App.retrieve()
      .then(response => {
       
        this.setState({ employees: response.data.results })

      }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDirectory(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handleFormSubmit}>Submit</button>

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
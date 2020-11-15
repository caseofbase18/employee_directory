import React, { Component } from "react";

import API from "../utils/API";
import Table from "./Table";
import Search from "./Search";
import Jumbotron from "./Jumbotron";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    this.getEmployees()
  }

  getEmployees = () => {
    API.retrieve()
      .then(response => {

        this.setState({ employees: response.data.results })
        this.setState({ filteredEmployees: response.data.results })

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

  searchDirectory = search => {
    const filteredEmployees = [];
    for (let i = 0; i < this.state.employees.length; i++) {
      const firstName = this.state.employees[i].name.first.toLowerCase();
      const lastName = this.state.employees[i].name.last.toLowerCase();
      if (firstName === search) {
        filteredEmployees.push(this.state.employees[i]);
      } else if (lastName === search) {
        filteredEmployees.push(this.state.employees[i]);
      } else if (firstName + " " + lastName === search) {
        filteredEmployees.push(this.state.employees[i]);
      }
    }
    this.setState({ filteredEmployees: filteredEmployees })
    console.log(filteredEmployees);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDirectory(this.state.search.toLowerCase());
  };

  clearSearch = event => {
    event.preventDefault();
    this.setState({ filteredEmployees: this.state.employees });
  }

  sortLastName = event => {
    event.preventDefault();
    // let sortedLastNames = this.state.filteredEmployees.sort((a,b) => (a.name.last - b.name.last)) 
    // console.log(sortedLastNames)

    const lastNameFilterResult = this.state.filteredEmployees.sort(function (a, b) {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (b.name.last > a.name.last) {
        return 1;
      }
    })
    console.log(this.state.filteredEmployees);
    this.setState({ filteredEmployees: lastNameFilterResult });
  }

  render() {
    return (

      <div className="container fluid">
        <Jumbotron />

        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <button onClick={this.handleFormSubmit}>Submit To Find Name</button>
            <br></br><br></br>
          </div>
          <div className="col-3">
            <button onClick={this.clearSearch}>Clear Name Search</button>
            <br></br><br></br>
          </div>
          <div className="col-3">
            <button onClick={this.sortLastName}>Sort By Last Name</button>
          </div>




        </div>
        <br></br>

        <Table employees={this.state.filteredEmployees} />

      </div>
    );
  }
}

export default EmployeeContainer;
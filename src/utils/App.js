// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Search from '../components/Search';
import Jumbotron from '../components/Jumbotron';
import EmployeeContainer from '../components/EmployeeContainer';

function App() {
  const requestURL = "https://randomuser.me/api/?results=200&nat=us"
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("it's working");
    randomUsers().then(results => {
      setUsers(results.data.results);
      console.log (results);
    }) 
    
  }, []
  );

  function randomUsers() {
    return axios(requestURL, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className="App">
       <Jumbotron users= {users}>
      </Jumbotron>
      <Search users= {users}>
      </Search>
      <Table users= {users}> 
      </Table>
      
     
     
    </div>
  );
}

export default App;

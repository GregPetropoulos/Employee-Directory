import React, { Component } from "react";

import EmployeeTable from "../EmployeeTable";
import SearchForm from "../SearchForm";
import API from "../../utils/API";

class EmployeeContainer extends Component {
  state = {
  search: "",
  employees:[],
  filteredEmployees: [],
  sortDir: this.initialSortDir,
  };

  // SORTING EACH COLUMN DIRECTIONALLY
  get initialSortDir(){
    return{
      name:"",
      phone:"",
      email:"",
      dob:"",
    }
  };

  // When this component mounts, call the api 'https://randomuser.me/api/?results=150'
  componentDidMount() {
    API.searchEmployees ()
        .then((res) => this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
        )
        .catch(err => console.log(err));
  }
};


// UPDATE THE SEARCH VALUE IN STATE TO FILTER BY EMPLOYEE NAME
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };
  
    // When the form is submitted, search the  API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  // SORTING ENGINE--using a key of specific object
  sortBy =(key, primary = 0, secondary = 0) => {
    let sortedStaff = this.state.filteredEmployees;
    if(this.state.sortDir[key]) {
      this.setState({
        filteredEmployees: sortedStaff.reverse(),
        sortDir:{
          ...this.initialSortDir,
          [key]: this.state.sortDir[key] === "asc"? "desc": "asc",
        },
      });
  } else {
    sortedStaff =this.state.filteredEmployees.sort((a,b) =>{
      a = a[key];
      b = b[key];

      // if secondary and primary are ===, 
      // such as sorting by last name and they are the same, then sort by first name instead

      if(primary){
        if(secondary && a[primary] === b[primary]) {
          return a[secondary].localCompare(b[secondary]);
        }
        return a[primary].localCompare(b[primary]);
      } else {
        return a.localCompare(b);
      }
    });
  
  this.setState({filteredEmployees: sortedStaff,
                 sortDir:{...this.initialSortDir, [key]: "asc",
                          },
                });
              }
            };

  // A FX THAT RETURNS A NEW ARRAY WITH FILTER METHOD AND UPDATES STATE
  filterEmployees =(data) => {
    if (data) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first
            .toLowerCase()
            .concat(" ", employee.name.last.toLowerCase())
            .includes(data) ||
            employee.phone.includes(data) ||
            employee.phone.replace(/[^\w\s]/gi, "").includes(data) ||
            employee.email.includes(data) ||
            this.formatDate(employee.dob.date).includes(data)
              );
            }),
          });
        } else{ 
        this.setState({filteredEmployees: this.state.employees});
      }
    };
  
formatDate = (date) => {
  date = new Date(date);
  let dob =[];
  dob.push(('0'+ (date.getMonth() + 1)).slice(-2));
  dob.push(('0'+ date.getDate()).slice(-2));
  dob.push(date.getFullYear());

  // Join the formatted date with dash delimeter
  return dob.join("-");
  }
  


  render() {
     return (
       <>
       <SearchForm
       value={this.state.search}
       handleInputChange ={this.handleInputChange}
       handleFormSubmit ={this.handleFormSubmit}
       />
       <div className = 'container mt'>
         <EmployeeTable
         state={this.state}
         sortBy={this.sortBy}
         filteredEmployees={this.filteredEmployees}
        />
         </div>
       </>
    );
  }
}

export default EmployeeContainer;

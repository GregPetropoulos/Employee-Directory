import React, { Component } from "react";

import EmployeeTable from "../EmployeeTable";
import SearchForm from "../SearchForm";
import API from "../../utils/API";

class EmployeeContainer extends Component {
  state = {
  search: "",
  employees:[],
  filteredEmployees: []
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchMovies("The Matrix");
  // }

  // searchMovies = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };


// UPDATE THE SEARCH VALUE IN STATE TO FILTER BY EMPLOYEE NAME
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };
  
    // When the form is submitted, search the  API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
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
  dob.push(date.getFullYear)
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
        //  filteredEmployees={this.filteredEmployees}
        />
         </div>
       </>
    //   
    
    //<Container>
    //     <Row>
    //       <Col size="md-8">
    //         <Card
    //           heading={this.state.result.Title || "Search for a Movie to Begin"}
    //         >
    //           {this.state.result.Title ? (
    //             <MovieDetail
    //               title={this.state.result.Title}
    //               src={this.state.result.Poster}
    //               director={this.state.result.Director}
    //               genre={this.state.result.Genre}
    //               released={this.state.result.Released}
    //             />
    //           ) : (
    //             <h3>No Results to Display</h3>
    //           )}
    //         </Card>
    //       </Col>
    //       <Col size="md-4">
    //         <Card heading="Search">
    //           <SearchForm
    //             value={this.state.search}
    //             handleInputChange={this.handleInputChange}
    //             handleFormSubmit={this.handleFormSubmit}
    //           />
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    );
  }
}

export default EmployeeContainer;

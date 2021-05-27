import React from "react";
// import "./style.css";

const SearchForm = (props) => {

    return(
        <nav className="navbar navbar-danger bg-danger justify-content-center">
            <form className = "form-inline m-6" onSubmit={props.handleFormSubmit}>
                <input
                className ="form-control"
                value ={props.value}
                name="search"
                onChange={props.handleInputChange}
                type="search"
                placeholder='Search'
                />
            </form>


        </nav>
    )

}

    
export default SearchForm;

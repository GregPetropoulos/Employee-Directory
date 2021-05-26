import React from "react";
// import "./style.css";

const SearchForm = (props) => {

    return(
        <nav className="navbar navbar-dark bg-dark">
            <form className = "form-inline m-3" onSubmit={props.handleFormSubmit}>
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

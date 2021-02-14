import React from "react";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="form-group bg-dark text-white">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Search By Name"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;

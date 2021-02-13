import React from "react";

const SearchBar = (props) => {
  return (
    <form>
      <div className="form-group bg-dark text-white">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Search"
          value={props.search}
          name="search"
        //   onChange={}
        />
      </div>
    </form>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="form-group bg-dark text-white">
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;

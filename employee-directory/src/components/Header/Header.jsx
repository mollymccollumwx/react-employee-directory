import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-white">
      <div className="container text-center">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Click on carrots to filter by heading or use the search to narrow your results.
        </p>
      </div>
    </div>
  );
};

export default Header;

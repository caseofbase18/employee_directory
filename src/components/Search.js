import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee Name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-success mt-3">
          Click Here!
        </button>
      </div>
    </form>
  );
}

export default Search;
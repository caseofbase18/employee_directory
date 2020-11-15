import React from "react";

function Search(props) {
    return (
        <div className="container fluid">
            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <h4><center>Enter Employee Name Here</center></h4>
                            <input
                                onChange={props.handleInputChange}
                                value={props.search}
                                name="search"
                                type="text"
                                className="form-control"
                                placeholder="First and/or Last Name"
                                id="search"
                            />
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
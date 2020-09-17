import React from 'react';

const SearchBar = () => {
    return (
        <React.Fragment>
            <form className="form-inline my-2">
                <input className="form-control form-control-sm mr-sm-2" placeholder="Search" type="text" />
                <button className="btn btn-sm btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </React.Fragment>
    );
}

export default SearchBar;

import React from 'react';
import {Button, Form} from "react-bootstrap";

const SearchBar = () => {
    return (
        <React.Fragment>
            <Form className="form-inline my-2">
                <Form.Control size="sm" className="border-secondary mr-sm-2 bg-primary text-white" placeholder="Search" type="text" />
                <Button size="sm" className="my-2 my-sm-0" type="submit">Search</Button>
            </Form>
        </React.Fragment>
    );
}

export default SearchBar;

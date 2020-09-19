import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const SearchBar = ({onSearch = () => false}) => {
    const [inputText, changeInputText] = useState("");
    const handleInput = event => {
        const {value} = event.currentTarget;
        changeInputText(value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        onSearch(inputText);
    };

    return (
        <React.Fragment>
            <Form className="form-inline my-2">
                <Form.Control onChange={handleInput} size="sm" className="border-secondary mr-sm-2 bg-primary text-white" placeholder="Search" type="text" />
                <Button onClick={handleClick} size="sm" className="my-2 my-sm-0" type="submit">Search</Button>
            </Form>
        </React.Fragment>
    );
}

export default SearchBar;

import React, {useState} from "react";
import {Modal, Button, Form, FormLabel} from 'react-bootstrap';
import {firstLetterUp} from '../../utils';

const ElementCreatorModal = ({items, onElementCreated, toggleFunction, isHidden}) => {
    const _prefix = '_el';

    const [formData, changeFormData] = useState({});
    const handleInput = event => {
        const {value, id} = event.currentTarget;
        changeFormData((state) => ({
            ...state,
            [id.replace(_prefix, '')]: value,
        }));
    };

    const handleClose = () => toggleFunction(false);
    const handleShow = () => toggleFunction(true);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        onElementCreated((state) => [
            ...state,
            Object.values(formData)
        ])
    };

    const renderFormItems = (items) => {
        return (
            items.map(({text}, index) => {
                return (
                    <div key={index} className="form-group">
                        <FormLabel htmlFor={`${_prefix}${index + 1}`}>{firstLetterUp(text)}</FormLabel>
                        <Form.Control onChange={handleInput} required type="text" className="form-control" id={`${_prefix}${index + 1}`} placeholder={`Enter ${text}`} />
                    </div>
                );
            })
        );
    }

    return (
        <Modal animation={false} show={isHidden} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Create new Row in Table</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <fieldset>
                        {renderFormItems(items)}
                    </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={() => (handleClose)}>
                    Insert Data
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default ElementCreatorModal;

import React, {useState} from 'react';
import { Table as BootstrapTable, Navbar, Button } from 'react-bootstrap';
import TableItem from "../table-item";
import ErrorIndicator from "../error-indicator";
import PaginationBar from "../paginator";
import SearchBar from "../search-bar";

import './table.css';
import ElementCreatorModal from "../modal-element-creator";


const Table = ({headerItems, bodyItems, bodyItemsEditor, pageIndex, renderId = true}) => {

    const [show, setShow] = useState(false);

    const renderHeader = (columnNames, renderId = true) => {
        if(renderId) columnNames.unshift({text: '#', sortable: true})
        return (
            <tr>
                {columnNames.map(({text, sortable}, index) => (
                    <th scope="col" key={index}>
                        {text}
                        {sortable ? <span onClick={()=> false} className="sortable order-4" /> : null}
                    </th>
                ))}
            </tr>
        );
    };

    const renderBody = (items, renderId) => {
        return (items.map((itemArray, index) => {
            if(renderId) itemArray.unshift(index + 1);
            return (
                <TableItem
                    renderId={renderId}
                    data={itemArray}
                    key={index}
                />
            );
        }));
    };

    if(bodyItems.every((el) => el.length !== headerItems.length)) {
        return (<ErrorIndicator />);
    }

    return (
        <React.Fragment>
            <ElementCreatorModal
                isHidden={show}
                toggleFunction={setShow}
                items={headerItems}
                onElementCreated={bodyItemsEditor}
            />
            <Navbar expand={false} variant="dark" className="border-0 flex-row">
                <Button
                    size="sm"
                    className="btn btn-sm btn-primary my-2 my-sm-0"
                    type="submit"
                    onClick={() => setShow(true)}
                >Add Row</Button>
                {/*<PaginationBar className="mr-auto mb-0"/>*/}
                <SearchBar />
            </Navbar>
            <BootstrapTable striped bordered hover variant="dark">
                <thead className="thead-dark">
                    {renderHeader(headerItems, renderId)}
                </thead>
                <tbody>
                    {renderBody(bodyItems, renderId)}
                </tbody>
            </BootstrapTable>
            <Navbar expand={false} variant="dark" className="border-0 flex-column">
                {/*<select className="d-none w-auto mr-auto form-control-sm">*/}
                {/*    <option>5</option>*/}
                {/*    <option>10</option>*/}
                {/*    <option>25</option>*/}
                {/*    <option>50</option>*/}
                {/*    <option>100</option>*/}
                {/*</select>*/}
                <PaginationBar currentPageIndex={pageIndex}/>
            </Navbar>

        </React.Fragment>
    );
}

export default Table;

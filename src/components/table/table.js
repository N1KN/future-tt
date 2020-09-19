import React from 'react';
import {Table as BootstrapTable} from 'react-bootstrap';
import TableHeader from "../table-header";
import TableBody from "../table-body";
import withData from "../hoc/with-data";
import {compose} from "../../utils";
import {connect} from "react-redux";
import {setSortBy, setSortType} from "../../actions/filters";

import './table.css';

const Table = ({headerItems, bodyItems, onChangeSort}) => {


    return (
        <React.Fragment>
            <BootstrapTable striped bordered hover variant="dark">
                <TableHeader
                    columnNames={headerItems}
                    onClick={onChangeSort} />
                <TableBody items={bodyItems} />
            </BootstrapTable>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    const {data: {error, loading}} = state;
    // console.log('TablePage', list, filters, state);
    return {
        hasLoading: loading,
        hasError: error
    };
};

export default compose(
    connect(mapStateToProps),
    withData(),
)(Table);

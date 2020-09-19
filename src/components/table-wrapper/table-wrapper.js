import React, {useEffect, useState} from 'react';
import { Navbar, Button } from 'react-bootstrap';
import PaginationBar from "../paginator";
import SearchBar from "../search-bar";
import ElementCreatorModal from "../modal-element-creator";
import Table from "../table";
import { clearFilter, setFilterText, setSortByAndType} from "../../actions/filters";
import {addBodyDataItem, setHeaderData} from "../../actions/data-list";
import {connect} from "react-redux";
import {generatePath, useHistory} from "react-router";
import {useRouteMatch} from "react-router-dom";
import './table-wrapper.css';

const TableWrapper = ({
                          headerItems,
                          bodyItems,
                          pageIndex,
                          itemsPerPage,
                          sortBy,
                          mapObj,
                          fillServiceType,
                          setSortByAndType,
                          onBodyItemSelect,
                          addRow,
                          changeHeaderData,
                          changeFilterText,
                          clearFilter,
                      }) => {

    const history = useHistory();
    let { path, url } = useRouteMatch();
    const [show, setShow] = useState(false);
    const [bodyItemsOnPage, setBodyItemsOnPage] = useState([]);
    useEffect(() => clearFilter, []);

    // if(bodyItems.every((el) => el.length !== headerItems.length)) {
    //     return (<ErrorIndicator />);
    // }



    const toggleSort = (index, newSortType) => {
        const _tmpHeaderData = [...headerItems];
        const newSortBy = mapObj[index];

        _tmpHeaderData[index]['sort'] = newSortType;

        if(sortBy.length && newSortBy !== sortBy) {
            _tmpHeaderData[mapObj.indexOf(sortBy)]['sort'] = 'default';
        }

        changeHeaderData(_tmpHeaderData);
        setSortByAndType(newSortBy, newSortType);
    }

    const setPage = (newPageIndex) => {
        if(pageIndex !== newPageIndex && newPageIndex >= 1
            && newPageIndex <= Math.ceil(bodyItems.length / itemsPerPage)) {
            const newPath = generatePath(path, {
                dataLength: fillServiceType,
                pageIndex: newPageIndex
            });
            history.replace(newPath);
        }
    };

    const getItemsOnPage = (items = [], perPage = 5, pageIndex = 1) => {
        const start = (pageIndex - 1) * perPage;
        const end = start + perPage;

        return items.slice(start, end);
    };

    useEffect(() => {
        if(bodyItems.length> 0 && getItemsOnPage(bodyItems, itemsPerPage, pageIndex).length === 0) {
            setPage(1);
        }
    }, [pageIndex, bodyItems]);

    return (
        <React.Fragment>
            <ElementCreatorModal
                isHidden={show}
                toggleFunction={setShow}
                items={headerItems}
                onElementCreated={addRow}
            />
            <Navbar expand={false} variant="dark" className="border-0 flex-row">
                <Button
                    size="sm"
                    className="btn btn-sm btn-primary my-2 my-sm-0"
                    type="submit"
                    onClick={() => setShow(true)}
                >Add Row</Button>
                {/*<PaginationBar className="mr-auto mb-0"/>*/}
                <SearchBar onSearch={changeFilterText}/>
            </Navbar>
            <Table
                onChangeSort={toggleSort}
                headerItems={headerItems}
                onBodyItemSelect={onBodyItemSelect}
                bodyItems={getItemsOnPage(bodyItems, itemsPerPage, pageIndex)} />
            <Navbar expand={false} variant="dark" className="border-0 flex-column">
                {/*<select className="d-none w-auto mr-auto form-control-sm">*/}
                {/*    <option>5</option>*/}
                {/*    <option>10</option>*/}
                {/*    <option>25</option>*/}
                {/*    <option>50</option>*/}
                {/*    <option>100</option>*/}
                {/*</select>*/}
                <PaginationBar
                    onSetPage={setPage}
                    currentPageIndex={pageIndex}
                    itemsPerPage={itemsPerPage}
                    itemsCount={bodyItems.length}
                />
            </Navbar>

        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    const {filters: {map, sortBy, itemsPerPage}, fillService} = state;

    return {
        fillServiceType: fillService,
        itemsPerPage: itemsPerPage,
        sortBy: sortBy,
        mapObj: map,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addRow: (id, firstName, lastName, email, phone) =>
            dispatch(addBodyDataItem(id, firstName, lastName, email, phone)),
        changeHeaderData: (headerData) => dispatch(setHeaderData(headerData)),
        changeFilterText: (str) => dispatch(setFilterText(str)),
        // setSortType: (str) => dispatch(setSortType(str)),
        setSortByAndType: (key, str) => dispatch(setSortByAndType(key, str)),
        clearFilter: () => dispatch(clearFilter()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper);

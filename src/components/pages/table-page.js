import React from 'react';
import {Redirect, useParams, useRouteMatch} from "react-router-dom";
import {generatePath} from "react-router";
import Table from "../table";
import DetailedItem from "../detailed-item";

const TablePage = () => {
    const headerColumnNames = [
        {text: '#', sortable: true},
        {text: 'firstName', sortable: true},
        {text: 'lastName', sortable: false},
        {text: 'email', sortable: true},
        {text: 'phone', sortable: true}
    ];
    const bodyItems = [
        [101,"Sue", "Corson", "DWhalley@in.gov", "(612)211-6296"],
        [102,"Lor", "Ipsumd", "dwhalley@in.gov", "(612)211-6296"],
        [103,"Sue", "Corson", "dwhalley@in.gov", "(612)211-6296"],
    ];

    let {dataLength, pageIndex} = useParams();
    let parsedPageIndex = pageIndex ? Number.parseInt(pageIndex) : 1
    let { path, url } = useRouteMatch();

    if (pageIndex !== `${parsedPageIndex}`) {
        return (
            <Redirect
                to={{
                    pathname: generatePath(path, {dataLength, pageIndex: parsedPageIndex}),
                }}
            />
        );
    }

    return (
        <React.Fragment>
            {/*<div>Table Page - {dataLength}({parsedPageIndex})</div>*/}
            <Table
                headerItems={headerColumnNames}
                bodyItems={bodyItems}
                pageIndex={pageIndex}
                renderId={false}
            />
            <DetailedItem />
        </React.Fragment>
    );
};

export default TablePage;

import React, {useState} from 'react';
import {Redirect, useParams, useRouteMatch, useHistory} from "react-router-dom";
import {generatePath} from "react-router";
import Table from "../table";
import DetailedItem from "../detailed-item";

const TablePage = () => {
    const headerItems = [
        {text: '#', sortable: true},
        {text: 'firstName', sortable: true},
        {text: 'lastName', sortable: false},
        {text: 'email', sortable: true},
        {text: 'phone', sortable: true}
    ];
    // const bodyItems = [
    //     [101, "Sue", "Corson", "DWhalley@in.gov", "(612)211-6296"],
    //     [102, "Lor", "Ipsumd", "dwhalley@in.gov", "(612)211-6296"],
    //     [103, "Sue", "Corson", "dwhalley@in.gov", "(612)211-6296"],
    // ];

    const [bodyItems, bodyItemsEditor] = useState([
        [101, "Sue", "Corson", "DWhalley@in.gov", "(612)211-6296"],
        [102, "Lor", "Ipsumd", "dwhalley@in.gov", "(612)211-6296"],
        [103, "Sue", "Corson", "dwhalley@in.gov", "(612)211-6296"],
    ]);

    const {dataLength, pageIndex: pageIndexStr} = useParams();
    const [pageIndex, changePageIndex] = useState(pageIndexStr ? Number.parseInt(pageIndexStr) : 1);
    let { path, url } = useRouteMatch();
    // let history = useHistory();
    // history.push("/");

    if (`${pageIndex}` !== pageIndexStr) {
        return (
            <Redirect
                to={{
                    pathname: generatePath(path, {dataLength, pageIndex}),
                }}
            />
        );
    }

    return (
        <React.Fragment>
            {/*<div>Table Page - {dataLength}({parsedPageIndex})</div>*/}
            <Table
                renderId={false}
                {...{headerItems,bodyItems, bodyItemsEditor, pageIndex}}
            />
            <DetailedItem />
        </React.Fragment>
    );
};

export default TablePage;

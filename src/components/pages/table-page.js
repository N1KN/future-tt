import React, {useContext, useEffect} from "react";
import {Redirect, useParams, useRouteMatch} from "react-router-dom";
import {generatePath} from "react-router";
import { connect } from 'react-redux';
import {ChangeFillServiceContext} from '../change-fill-service-context';
import DetailedItem from "../detailed-item";
import {changeFillService} from "../../actions/fill-service";
import {changeMap} from "../../actions/filters";
import {getVisibleData} from "../../selectors";
import { fetchData, setHeaderData} from "../../actions/data-list";
import {compose} from "../../utils";
import {withFillService} from "../hoc";
import {convertObjectToArray} from "../../helpers";
import TableWrapper from "../table-wrapper";
import {changeItemDetails} from "../../actions/item-details";


const TablePage = ({
                       fillServiceType,
                       headerItems,
                       dataList,
                       detailsObj,
                       setMap,
                       setDetailedItem,
                       changeHeaderData,
                       changeService,
                       fetchData
}) => {
    const bodyItemsMap = ["id", "firstName", "lastName", "email", "phone"];
    const bodyItems = dataList.map((dataItem) => convertObjectToArray(dataItem, bodyItemsMap));

    const {dataLength, pageIndex: pageIndexStr} = useParams();
    const pageIndex = pageIndexStr ? Number.parseInt(pageIndexStr) : 1;
    const changeFillService = useContext(ChangeFillServiceContext);
    let { path } = useRouteMatch();

    const handleBodyItemSelect = (index) => {
        setDetailedItem(dataList[index]);
    };

    useEffect(() => {
        setMap(bodyItemsMap);
        changeHeaderData([
            {text: bodyItemsMap[0], sort: "default", sortable: true},
            {text: bodyItemsMap[1], sort: "default", sortable: true},
            {text: bodyItemsMap[2], sort: "default", sortable: false},
            {text: bodyItemsMap[3], sort: "default", sortable: true},
            {text: bodyItemsMap[4], sort: "default", sortable: true}
        ]);
    }, []);

    useEffect(() => {
        if(fillServiceType === dataLength) {
            fetchData();
        } else {
            changeFillService(dataLength);
            changeService(dataLength);
        }
    }, [dataLength, fillServiceType]);

    // useEffect(() => {
    //     changePageIndex(Number.parseInt(pageIndexStr));
    // }, [pageIndexStr])

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
            {/*<div>TableWrapper Page - {dataLength}({parsedPageIndex})</div>*/}
            <TableWrapper
                renderId={false}
                onBodyItemSelect={handleBodyItemSelect}
                {...{headerItems, bodyItems, pageIndex}}
            />
            <DetailedItem hidden={detailsObj.selected} data={detailsObj.item}/>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    const {filters, data: {headerList, bodyList, error, loading}, itemDetails} = state;
    // console.log('TablePage', list, filters, state);
    return {
        fillServiceType: state.fillService,
        dataList: getVisibleData(bodyList, filters),
        headerItems: headerList,
        detailsObj: itemDetails,
        hasLoading: loading,
        hasError: error
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        setMap: (newMap) => dispatch(changeMap(newMap)),
        changeService: (fillServiceType) => dispatch(changeFillService(fillServiceType)),
        fetchData: fetchData(props.fillService, dispatch),
        setDetailedItem: (obj) => dispatch(changeItemDetails(obj)),
        changeHeaderData: (headerData) => dispatch(setHeaderData(headerData))
    };
};

export default compose(
    withFillService(),
    connect(mapStateToProps, mapDispatchToProps),
)(TablePage);

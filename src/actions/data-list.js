import ShortFillService from "../services/short-fill-service";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_BODY_DATA = 'ADD_BODY_DATA';
export const CHANGE_HEADER_DATA = 'CHANGE_HEADER_DATA';

const dataRequested = () => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

const dataLoaded = (newData) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: newData
    };
};

const dataError = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    };
};

const addBodyDataItem = (id, firstName, lastName, email, phone) => {
    console.log('Actions.addBodyDataItem', [id, firstName, lastName, email, phone]);
    return {
        type: ADD_BODY_DATA,
        payload: {
            id: String(id),
            firstName: String(firstName),
            lastName: String(lastName),
            email: String(email),
            phone: String(phone),
        }
    };
};

const setHeaderData = (headerData) => {
    return {
        type: CHANGE_HEADER_DATA,
        payload: headerData
    };
}

const fetchData = (fillService, dispatch) => () => {
    console.log('fetchData', fillService instanceof ShortFillService ? 'short' : 'long');
    dispatch(dataRequested());
    fillService.getTableData()
        .then((response) => {
            return dispatch(dataLoaded(response))
        }).catch((err) => {
        return dispatch(dataError(err))
    });
};

export {
    fetchData,
    addBodyDataItem,
    setHeaderData
};

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_BODY_DATA,
    CHANGE_HEADER_DATA
} from "../actions/data-list";

const updateDataList = (state, action) => {
    if (state === undefined) {
        return {
            headerList: [],
            bodyList: [],
            loading: true,
            error: null
        };
    }

    // console.log(`Reducers.${action.type}`, state.data, action);
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state.data,
                bodyList: [],
                loading: true,
                error: null
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state.data,
                bodyList: action.payload,
                loading: false,
                error: null
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state.data,
                bodyList: [],
                loading: false,
                error: action.payload
            };

        case ADD_BODY_DATA:
            console.log(`Reducers.${action.type}`, state.data, action.payload);
            return {
                ...state.data,
                bodyList: [...state.data.bodyList, action.payload],
            };

        case CHANGE_HEADER_DATA:
            return {
                ...state.data,
                headerList: action.payload,
            };

        default:
            return state.data;
    }
};

export default updateDataList;

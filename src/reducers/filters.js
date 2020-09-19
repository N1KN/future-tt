import {CHANGE_MAP, CLEAR_FILTER, FILTER_TEXT, SORT_BY, SORT_TYPE, SORT_TYPE_BY} from "../actions/filters";

const filtersReducerDefaultState = {
    text: "",
    sortType: "",
    sortBy: "",
    map: [],
};

const changeFilters = (state, action) => {
    if (state === undefined) {
        return {
            itemsPerPage: 50,
            text: "",
            sortType: "",
            sortBy: "",
            map: [],
        };
    }
    //TODO: Remove
    // console.log('changeFilters', state, action);
    switch (action.type) {
        case FILTER_TEXT:
            return {
                ...state.filters,
                text: action.payload
            };
        case SORT_TYPE:
            return {
                ...state.filters,
                sortType: action.payload
            };
        case SORT_BY:
            return {
                ...state.filters,
                sortBy: action.payload
            };
        case SORT_TYPE_BY:
            return {
                ...state.filters,
                sortBy: action.payload.sortBy,
                sortType: action.payload.sortType,
            };

        case CHANGE_MAP:
            return {
                ...state.filters,
                map: action.payload
            };
        case CLEAR_FILTER:
            return {
                ...state.filters,
                text: action.payload.text,
                sortType: action.payload.sortType,
                sortBy: action.payload.sortBy,
                map: action.payload.map,
            };
        default:
            return state.filters;
    }
};

export {changeFilters};

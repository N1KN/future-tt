export const FILTER_TEXT = 'FILTER_TEXT';
export const SORT_TYPE_BY = 'SORT_TYPE_BY';
export const SORT_TYPE = 'SORT_TYPE';
export const SORT_BY = 'SORT_BY';
export const CHANGE_MAP = 'CHANGE_MAP';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const setFilterText = (text = '') => ({
    type: FILTER_TEXT,
    payload: text
});

export const setSortType = (sortType) => ({
    type: SORT_TYPE,
    payload: sortType
});

export const setSortBy = (sortBy) => ({
    type: SORT_BY,
    payload: sortBy
});

export const setSortByAndType = (sortBy, sortType) => ({
    type: SORT_TYPE_BY,
    payload: {sortBy, sortType}
});

export const changeMap = (mapArr) => ({
    type: CHANGE_MAP,
    payload: mapArr
});

export const clearFilter = () => ({
    type: CLEAR_FILTER,
    payload: {
        text: '',
        sortBy: '',
        sortType: '',
        map: []
    },
});


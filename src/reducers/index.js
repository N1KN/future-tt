import updateDataList from './data-list';
import {changeFilters} from "./filters";
import {changeFillService} from "./fill-service";
import {changeDetailedItem} from "./item-details";

const reducer = (state, action) => {
    return {
        data: updateDataList(state, action),
        filters: changeFilters(state, action),
        fillService: changeFillService(state, action),
        itemDetails: changeDetailedItem(state, action)
    };
};

export default reducer;

import {CHANGE_SERVICE} from "../actions/fill-service";

const changeFillService = (state, action) => {
    if (state === undefined) {
        return "";
    }

    switch (action.type) {
        case CHANGE_SERVICE:
            return action.payload;
        default:
            return state.fillService;
    }
};

export {changeFillService};

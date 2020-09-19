import {CHANGE_ITEM_DETAILS} from "../actions/item-details";

const changeDetailedItem = (state, action) => {
    if (state === undefined) {
        return {
            selected: false,
            item: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: {
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                description: ''
            }
        };
    }

    switch (action.type) {
        case CHANGE_ITEM_DETAILS:
            return action.payload;
        default:
            return state.itemDetails;
    }
};

export {changeDetailedItem};

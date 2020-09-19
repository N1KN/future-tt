export const CHANGE_ITEM_DETAILS = 'CHANGE_ITEM_DETAILS';
export const CLEAR_ITEM_DETAILS = 'CLEAR_ITEM_DETAILS';

export const changeItemDetails = (item) => ({
    type: CHANGE_ITEM_DETAILS,
    payload: {
        selected: true,
        item
    }
});

export const clearItemDetails = () => ({
    type: CLEAR_ITEM_DETAILS,
    payload: {
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
    },
});

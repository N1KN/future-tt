const getVisibleData = (dataList, filter) => {
    const { text, sortBy, sortType, map } = filter;

    return dataList.filter((dataItem) => {
        return Object.values(dataItem).some((value) => {
            // TODO: Remove
            // console.log('getVisibleData', {
            //     _f: String(value).toLowerCase(),
            //     _s: text.toLowerCase(),
            //     _l: String(value).toLowerCase().includes(text.toLowerCase())});
            return String(value).toLowerCase().includes(text.toLowerCase());
        });
    }).sort((leftItem, rightItem) => {
        const index = map.indexOf(sortBy);
        if(index !== -1) {
            const leftStr = leftItem[map[index]];
            const rightStr = rightItem[map[index]];
            switch (sortType) {
                case 'asc': {
                    if (leftStr > rightStr) {
                        return 1;
                    } else if (leftStr < rightStr) {
                        return -1;
                    }
                    break;
                }
                case 'desc': {
                    if (leftStr < rightStr) {
                        return 1;
                    } else if (leftStr > rightStr) {
                        return -1;
                    }
                    break;
                }

                default: {
                    return 0;
                }
            }
        }

        return 0;
    });
};

export default getVisibleData;

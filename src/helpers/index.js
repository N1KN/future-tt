import {getType} from "../utils";

const convertObjectToArray = (obj, mapArr) => {
    if (getType(obj) === 'object' && Object.keys(obj).length >= mapArr.length) {
        return mapArr.filter((value, index, all) => {
            return obj.hasOwnProperty(value)
        }).map((value, index, all) => {
            return String(obj[value]);
        });
    }

    return [];
};

export {convertObjectToArray};

const firstLetterUp = (str) => `${str.split('').shift().toUpperCase()}${str.slice(1)}`;

const getType = (e, low = true) => ((str) => low ? str.toLowerCase() : str
    )(Object.prototype.toString.call(e).replace(/^\[[\w]*\s|\]$/g, ''));

const checkAllTypes = (type, ...variables) =>
    variables.every((value) =>
        getType(value) === type.toLowerCase());


const compose = (...functions) => (comp) => {
    return functions.reduceRight(
        (wrapped, f) => f(wrapped), comp);
};

const sortMultidimensionalArray = (arr = [], index = 0, orderBy) => {
    const asc = (firstArray, secondArray) => {
        if (firstArray[index] > secondArray[index]) {
            return 1;
        } else if (firstArray[index] < secondArray[index]) {
            return -1;
        }

        return 0;
    }

    const desc = (firstArray, secondArray) => {
        if (firstArray[index] < secondArray[index]) {
            return 1;
        } else if (firstArray[index] > secondArray[index]) {
            return -1;
        }

        return 0;
    }

    switch (orderBy) {
        case 'asc': return arr.sort(asc);
        case 'desc': return arr.sort(desc);
        default: return arr;
    }
};

const createQuery = (obj, prefix = '?') => { //Гененрируем правильный get/post запрос спараметрами
    let tmp = "";
    if (getType(obj) === "object" && Object.keys(obj).length > 0) {
        for (let key in obj) {
            if (tmp.length === 0)
                tmp += key + ((String(obj[key]).length > 0) ? "=" + obj[key] : "=");
            else
                tmp += "&" + key + ((String(obj[key]).length > 0) ? "=" + obj[key] : "=");
        }
    }
    return `${tmp.length > 0 ? prefix : ''}${tmp}`;
};

export {firstLetterUp, getType, checkAllTypes, compose, sortMultidimensionalArray, createQuery};

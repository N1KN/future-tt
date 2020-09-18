const firstLetterUp = (str) => `${str.split('').shift().toUpperCase()}${str.slice(1)}`;

const getType = (e, low = true) => {
    let tmpResult = Object.prototype.toString.call(e).replace(/^\[[\w]*\s|\]$/g, '');
    return low ? tmpResult.toLocaleLowerCase() : tmpResult;
};

export {firstLetterUp, getType};

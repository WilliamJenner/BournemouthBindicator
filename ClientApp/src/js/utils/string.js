export var CapitaliseIndex = function (str, index) {
    if (index > 0) {
        return str.slice(0, index - 1) + str.charAt(index).toUpperCase() + str.slice(index + 1);
    }
    else {
        return str.charAt(index).toUpperCase() + str.slice(index + 1);
    }
};
export var CapitaliseFirst = function (str) {
    return CapitaliseIndex(str, 0);
};

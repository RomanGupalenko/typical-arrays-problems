exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let min = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }
    return min;
};

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let max = null;
    for (let j = 0; j < array.length; j++) {
        if (array[j] > max) max = array[j];
    }
    return max;
};

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let sum = 0;
    for (let k = 0; k < array.length; k++) {
        sum += array[k];
    }
    return sum / array.length;
};

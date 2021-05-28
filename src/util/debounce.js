/*
    https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_debounce
    Creates a debounced function that delays invoking func until after wait milliseconds
    have elapsed since the last time the debounced function was invoked.
*/
export default function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

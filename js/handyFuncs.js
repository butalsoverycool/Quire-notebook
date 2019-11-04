/*
* SOME HANDY FUNCS
*******************/

// Get index of nth substr
const nthIndex = (str, sub, n) => {
    let len = str.length, x = -1;
    while (n-- && x++ < len) {
        x = str.indexOf(sub, x);
        if (x < 0) break;
    }
    return x;
}

// Print date string
const printFullDate = () => {
    const d = new Date();
    const date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    const time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return date + ' ' + time;
}
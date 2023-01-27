function add(num1, num2) {
    return num1 + num2;
}
function add1(num1, num2) {
    console.log(num1, num2);
}
var combinedVal;
combinedVal = add;
combinedVal(1, 2);
function addCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addCallback(1, 2, function (result) {
    console.log('Print result', result);
    return result;
});

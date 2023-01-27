function add(num1, num2, showResult) {
    if (showResult) {
        console.log('Print data', num1 + num2);
        return num1 + num2;
    }
    return num1 + num2;
}
var num1 = 5;
var num2 = 2.8;
var printResult = false;
var response = add(num1, num2, printResult);

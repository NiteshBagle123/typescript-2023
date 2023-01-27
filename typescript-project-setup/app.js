function add(num1, num2, showResult, phase) {
    if (showResult) {
        console.log(phase, num1 + num2);
        return num1 + num2;
    }
    return num1 + num2;
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var response = add(num1, num2, printResult, 'Print data');

function add (num1: number, num2: number, showResult: boolean) {
    if(showResult) {
        console.log('Print data', num1 + num2);
        return num1 + num2;
    }
    return num1 + num2;
}

const num1 = 5;
const num2 = 2.8;
const printResult = false;
const response = add(num1, num2, printResult);
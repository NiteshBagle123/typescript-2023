function add (num1: number, num2: number, showResult: boolean, phase: string) {
    if(showResult) {
        console.log(phase, num1 + num2);
        return num1 + num2;
    }
    return num1 + num2;
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const response = add(num1, num2, printResult, 'Print data');
function add (num1: number, num2: number): number {
    return num1 + num2;
}

function add1 (num1: number, num2: number): void {
    console.log(num1, num2);
}

let combinedVal: (a: number, b: number) => number
combinedVal = add;
combinedVal(1, 2);

function addCallback (n1: number, n2: number, cb: (a: number) => number) {
    const result = n1 + n2;
    cb(result);
}

addCallback(1,2, (result) => {
    console.log('Print result', result)
    return result;
})
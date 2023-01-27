function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    return num1.toString() + num2.toString();
}
console.log(add(1, '1'));
console.log(add(1, 1));

interface Greetable {
    name: string;
    greet(phrase: string): void
}

class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string): void {
        console.log(phrase);
    }
}
const personObj = new Person('Nitesh');
personObj.greet('Hello Nitesh!');
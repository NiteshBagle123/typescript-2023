interface Named {
    readonly name: string;
}
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string) {
        console.log(phrase, this.name);
    }
}
let personObj: Greetable;
personObj = new Person('Nitesh');
personObj.greet('Hello Nitesh!');
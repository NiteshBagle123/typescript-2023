// type addFn = (a: number, b: number) => number;
interface addFn {
    (a: number, b: number): number;
}

let add: addFn;
add = (a, b) => {
    return a + b;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }
    greet(phrase: string) {
        if(this.name){
            console.log(phrase, this.name);
        } else {
            console.log(phrase);
        }
    }
}
let personObj: Greetable;
personObj = new Person();
personObj.greet('Hello Nitesh!');
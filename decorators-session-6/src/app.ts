function Logger(constructor: Function) {
    console.log('Logging...', constructor);
}

@Logger
class Person {
    name = 'Nitesh';
    constructor(){
        console.log('Creating person object...')
    }
}

const person = new Person();
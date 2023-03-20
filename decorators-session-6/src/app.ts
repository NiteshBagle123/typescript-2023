// first decorator function
// function Logger(constructor: Function) {
//     console.log('Logging...', constructor);
// }

// @Logger
// class Person {
//     name = 'Nitesh';
//     constructor(){
//         console.log('Creating person object...')
//     }
// }

// const person = new Person();

function Logger(logString: string) {
   console.log('LOGGER_FACTORY');
   return function(constructor: Function) {
    console.log('constructor', constructor);
    console.log('logString', logString);
   }
}

function withTemplate(template: string, hookId: string) {
    console.log('TEMPLATE_FACTORY');
    return function(_: Function) {
        const hookElement = document.getElementById('app');
        if(hookElement){
            hookElement.innerHTML = template;
        }
        console.log('template', template);
        console.log('hookId', hookId);
    }
}

@Logger('LOGGING-STRING')
@withTemplate('<h1>My Person</h1>', 'app')
class Person {
    name = 'Nitesh';
    constructor(){
        console.log('Creating person object...')
    }
}

const person = new Person();

function log(target: any, propertyName: string) {
    console.log('LOG_FACTORY');
    console.log('target', target);
    console.log('propertyName', propertyName);
}

function log2(target: any, name: string, descriptor: PropertyDecorator) {
    console.log('ACCESSOR_FACTORY');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    @log
    title: string;
    private price: number;

    set priceVal(val: number) {
        if(val) {
            this.price = val;
        } else {
            throw new Error('Invalid price')
        }
    }
    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
    
    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }
}
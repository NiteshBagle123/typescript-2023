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
   return function(constructor: Function) {
    console.log('constructor', constructor);
    console.log('logString', logString);
   }
}

function withTemplate(template: string, hookId: string) {
    return function(_: Function) {
        const hookElement = document.getElementById('app');
        if(hookElement){
            hookElement.innerHTML = template;
        }
        console.log('template', template);
        console.log('hookId', hookId);
    }
}

// @Logger('LOGGING-STRING')
@withTemplate('<h1>My Person</h1>', 'app')
class Person {
    name = 'Nitesh';
    constructor(){
        console.log('Creating person object...')
    }
}

const person = new Person();
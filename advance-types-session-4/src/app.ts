// guards type
type Combinable1 = string | number;

// function overload
// function add(a: number, b: number): number;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: string, b: string): string;
function add(a: Combinable1, b: Combinable1) {
    if(typeof a === 'string' || typeof b === 'string') {
        return Number(a)+ Number(b);
    }
    return a + b;
}

type Admin2 = {
    name: string;
    privileges: string[]
};

type Employee2 = {
    name: string;
    startDate: Date;
}

type unKnownEmployee = Admin2 | Employee2;

function printEmployeeInfo(employee: unKnownEmployee){
    console.log(employee.name);
    if('privileges' in employee){
        console.log(employee.privileges);
    }
    if('startDate' in employee) {
        console.log(employee.startDate);
    }
}
printEmployeeInfo({
    name: 'Nitesh Bagle',
    privileges: ['Admin'],
    startDate: new Date()
});


class Car {
    drive() {
        console.log('Driving car...');
    }
}

class Truck {
    drive() {
        console.log('Driving Truck...');
    }
    loadCargo(amount: number) {
        console.log('Print cargo', amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(10);
    }
}

useVehicle(v1);
useVehicle(v2);

// discriminated unions
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    if(animal.type === 'bird') {
        return animal.flyingSpeed
    }

    if(animal.type === 'horse') {
        return animal.runningSpeed
    }
    return '';
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 100 });

// alternate 1
const inputText = <HTMLInputElement>document.getElementById('input-element')!;

// alternate 2
const inputText1 = document.getElementById('input-element')! as HTMLInputElement;
inputText.value = 'Hi, There!';

// alternate 3
const inputText2 = document.getElementById('input-element') as HTMLInputElement;
if(inputText2) {
    inputText2.value = 'Hi, There!';
}

// alternate 4
const inputText3 = document.getElementById('input-element');

if(inputText3) {
    (inputText3 as HTMLInputElement).value = 'Hi, There';
}


// index properties
interface ErrorContainer {
    [key: string]: string  
}

const errorMessage: ErrorContainer = {
    email: 'Not a valid email'
}


// optional chaining
const fetchedUserData = {
    id: '1',
    name: 'Nitesh Bagle',
    job: {
        title: 'Senior Engineer',
        Description: 'Software Developer'
    }
}

console.log(fetchedUserData?.job?.Description);

// nullish coalescing
const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log('Print storedData', storedData);

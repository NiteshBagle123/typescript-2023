// guards type
type Combinable1 = string | number;
function add(a: Combinable1, b: Combinable1) {
    if(typeof a === 'string' || typeof b === 'string'){
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
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 100 });
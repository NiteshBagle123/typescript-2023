// intersection types with type keyword
type Admin = {
    name: string;
    privileges: string[]
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
    name: 'Nitesh Bagle',
    privileges: ['Admin'],
    startDate: new Date()
}

// intersection types with interfaces
interface Admin1 {
    name: string;
    privileges: string[]
};

interface Employee1 {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee1 extends Admin1, Employee1 {

}

const employee1: ElevatedEmployee1 = {
    name: 'Nitesh Bagle',
    privileges: ['Admin'],
    startDate: new Date()
}

type Combinable = string | number;
type numeric = number | boolean;
type universal = Combinable & boolean;
class Department {
    // private name: string;
    private employees: string [] = [];
    constructor(private readonly name: string) {
        // this.name = name;
        // this.employees = this.employees;
    }

    describe(this: Department) {
        console.log('Department', this.name);
    }

    addEmployees(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.name);
        console.log(this.employees);
    }
}
const departmentResponse = new Department('Accounting');
// departmentResponse.addEmployees('Nitesh');
departmentResponse.printEmployees();
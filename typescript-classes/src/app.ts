abstract class Department {
    // private name: string;
    protected employees: string [] = [];
    constructor(protected readonly name: string) {
        // this.name = name;
        // this.employees = this.employees;
    }

    abstract describe(this: Department): void

    addEmployees(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.name);
        console.log(this.employees);
    }

    static createEmployee(name: string) {
        return {
            name
        }
    }
}

const employeeDetail = Department.createEmployee('Nitesh Bagle');
console.log(employeeDetail);

class ITDepartment extends Department {
    private static instance: ITDepartment;
    private constructor(name: string, public admins: string[], private lastReport: string) {
        super(name);
        this.admins = admins;
        this.lastReport = lastReport;
    }

    static getInstance() {
        if(ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('Nitesh', ['Nitesh Bagle'], 'Testing team');
        return this.instance;
    }
    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('Recent reports not found');
    }

    set mostRecentReport(value: string) {
        this.addReport(value);
    }
    adminsDetails() {
        console.log('print admins', this.admins)
    }

    addReport(report: string) {
        this.lastReport = report;
    }

    describe() {
        console.log('ITDepartment', this.name);
    }
}
// const departmentResponse = new Department('Accounting');
// departmentResponse.printEmployees();

const ITDepartmentResponse = ITDepartment.getInstance();
console.log(ITDepartmentResponse.mostRecentReport);
ITDepartmentResponse.mostRecentReport = 'New Testing';
console.log(ITDepartmentResponse.mostRecentReport);
ITDepartmentResponse.describe();
ITDepartmentResponse.adminsDetails();
class EmployeePayrollData {
    id;
    //name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        // this.name = name;
        this.salary = salary;
    }

    get name() {
        console.log("Inside getter");
        return this._name;
    }

    set name(name) {
        console.log("Inside setter");
        this._name = name;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Shubham", 500000);
console.log(employeePayrollData);
employeePayrollData.name = "SAINI";
console.log(employeePayrollData);
console.log(employeePayrollData.name);
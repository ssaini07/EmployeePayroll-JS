class EmployeePayrollData {
    id;
    name;
    salary;
    gender;
    startDate;
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    get name() {
        console.log("Inside getter");
        return this._name;
    }

    set name(name) {
        console.log("Inside setter");
        this._name = name;
    }
//Method
    toString() {
        return " id = " + this.id + ", name = " + this.name + ", salary = " + this.salary  + " gender = "+ 
        this.gender + " startDate = " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Shubham", 500000);
console.log(employeePayrollData);
employeePayrollData.name = "SAINI";
console.log(employeePayrollData);
console.log(employeePayrollData.name);

let newEmployeePayrollData = new EmployeePayrollData(2, "Karanveer", 600000, "M", new Date());
console.log(newEmployeePayrollData.toString());
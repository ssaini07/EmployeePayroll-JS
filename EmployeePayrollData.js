class EmployeePayrollData {
    id;
    //name;
    salary;
    gender;
    startDate;
    constructor(id, salary, gender, startDate) {
        this.id = id;
        //this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    get name() {
        console.log("Inside getter");
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            throw "Sorry name is incorrect";
        }
    }
    //Method
    toString() {
        return " id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + " gender = " +
            this.gender + " startDate = " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Shubham", 500000);
//console.log(employeePayrollData);
//employeePayrollData.name = "SAINI";
//console.log(employeePayrollData);
//console.log(employeePayrollData.name);
try {
    employeePayrollData.name = "Saini123";
    console.log(employeePayrollData);
} catch (e) {
    console.log(e);
}
//let newEmployeePayrollData = new EmployeePayrollData(2, "Karanveer", 600000, "M", new Date());
//console.log(newEmployeePayrollData.toString());
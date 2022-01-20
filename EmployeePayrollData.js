class EmployeePayrollData {
    //id;
    //name;
    //salary;
    //gender;
    //startDate;
    constructor() {
        //this.id = id;
        //this.name = name;
        //this.salary = salary;
        //this.gender = gender;
        //this.startDate = startDate;
    }
//For name
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
// For id
    get id() {
        console.log("Inside id");
        return this._id;
    }

    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id)) {
            this._id = id;
        }
        else {
            throw "Sorry id should be non zero positive number!!";
        }
    }

    //For salary
    get salary() {
        console.log("Inside salary");
        return this._salary;
    }

    set salary(salary) {
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary)) {
            this._salary = salary;
        }
        else {
            throw "Sorry salary should be non zero positive number!!";
        }
    }

    //For gender
    get gender() {
        console.log("Inside gender");
        return this._gender;
    }

    set gender(gender) {
        let genderRegex = RegExp('^[A-Z]{M|F}$');
        if(genderRegex.test(gender)) {
            this.gender = gender;
        }
        else {
            throw "Sorry gender should be either M or F!!";
        }
    }

     //For date
     get startDate() {
        console.log("Inside start date");
        return this._startDate;
    }

    set startDate(startDate) {
        let startDateRegex = RegExp('^\d{1,2}\/\d{1,2}\/\d{4}$');
        if(startDateRegex.test(startDate)) {
            this.startDate = startDate;
        }
        else {
            throw "Sorry date is not a future date!!";
        }
    }
    //Method
    toString() {
        return " id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + " gender = " +
            this.gender + " startDate = " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Shubham", 500000);

/* try {
    employeePayrollData.name = "Saini123";
    console.log(employeePayrollData);
} catch (e) {
    console.log(e);
} */
//To check if id is non zero postive number or not.
try {
    employeePayrollData.id = 2;
    console.log(employeePayrollData);
} catch (e) {
    console.log(e);
}

//To check if salary id non zero poitive number or not.
try {
    employeePayrollData.salary = 999999;
    console.log(employeePayrollData);
} catch (e) {
    console.log(e);
}

//To check gender
try {
    employeePayrollData.gender = "M";
    console.log(employeePayrollData);
} catch (e) {
    console.log(e);
}

//To check start date 
try {
    employeePayrollData.startDate = "1/5/1999";
    console.log(employeePayrollData);
} catch (e) {
    console.log(e);
}


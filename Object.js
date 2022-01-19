const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyHrsArr = new Array();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsArr.push({
        day: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calculateDailyWage(empHrs),
        /*toString() {
            return '\nDay' + this.day + '=> Working hours is ' + this.dailyHours +
                ' And wage earned = ' + this.dailyWage
        },
        */
    });
}

console.log("Showing daily hours worked and Wage earned: " + empDailyHrsArr);

//UC ==> 11A
let totalWage = empDailyHrsArr.reduce((totalWage, dailyWageAndHrsObject) => {
    return totalWage += dailyWageAndHrsObject.dailyWage;
}, 0)
console.log("Total wage: " + totalWage);

let totalHrs = empDailyHrsArr.reduce((totalHrs, dailyHrsAndWages) => {
    return totalHrs += dailyHrsAndWages.dailyHours;
}, 0)
console.log("Total Hours Worked: " + totalHrs);

//UC ==> 11B
empDailyHrsArr.forEach(dailyWageAndHrsObj => {
    if (dailyWageAndHrsObj.dailyHours == FULL_TIME_HOURS) {
        console.log(dailyWageAndHrsObj);
    }
});

//Another way to get o/p by using filter method
empDailyHrsArr
    .filter(dailyWageAndHrsObj => dailyWageAndHrsObj.dailyHours == FULL_TIME_HOURS)
    .forEach(dailyWorkHrs => console.log(dailyWorkHrs));

//UC ==> 11C
let partWorkingDayStrArr = empDailyHrsArr
    .filter(dailyWageAndHrsObj => dailyWageAndHrsObj.dailyHours == PART_TIME_HOURS)
    .map(dailyWageAndHrsObj => dailyWageAndHrsObj);
console.log(partWorkingDayStrArr);

//UC ==> 11D
let noWorkingDays = empDailyHrsArr
    .filter(dailyWageAndHrsObj => dailyWageAndHrsObj.dailyHours == 0)
    .map(dailyWageAndHrsObj => dailyWageAndHrsObj);
console.log(noWorkingDays);

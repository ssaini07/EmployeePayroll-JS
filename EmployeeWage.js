const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();//need to create here map for UC 8

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

/** function for calculating daily wage */
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
    let dailyWage = calculateDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage); //Here we need to set key and value for UC 8
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC6 -Total Days:" + totalWorkingDays + "," + " Total Hours:" + totalEmpHrs + "," + " Employee Wage: " + empWage + "," + "Daily Wages: " + "[" + empDailyWageArr + "]");

//UC ==> 7a
let totalWage = 0;
function sum(dailyWage) {
    totalWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log(" 7A: TotalWage using forEach: " + totalWage);

function totalWages(sum, nextValue) {
    return sum + nextValue;
}
let sum1 = empDailyWageArr.reduce(totalWages, 0);
console.log(" 7A: TotalWage using reduce: " + sum1);

//UC ==> 7b

let counter = 0;
function mapDayWithDailyWage(dailyWage) {
    counter++;
    return counter + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithDailyWage);
console.log(" 7B: Day along with daily wage: " + mapDayWithWageArr);

//UC ==> 7c
let fullTimeWage = function (dailyWage) {
    return dailyWage.toString().includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7C: Day when full daily wage is earned: " + fullDayWageArr);

//UC ==> 7d
let fullDayWageFirstOccurence = mapDayWithWageArr.find(fullTimeWage);
console.log("7D: First occurence when full time wage was earned: " + fullDayWageFirstOccurence);

//UC ==> 7e
console.log("7E: Check if Every Element of Full Time Wage is truly holding full time wage: " + fullDayWageArr.every(fullTimeWage));

//UC ==> 7f
let partTimeWage = function (dailyWage) {
    return dailyWage.toString().includes("80");
}
console.log("7F: Check if there is any Part Time Wage: " + fullDayWageArr.some(partTimeWage));

//UC ==> 7g
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("7G: number of days the Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));

//UC ==> 8
for (let [key, value] of empDailyWageMap) {
    console.log(key + " - " + value);
}
function calcTotalWageUsingReduce(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Total wage using reduce: " + Array.from(empDailyWageMap.values()).reduce(calcTotalWageUsingReduce, 0));

let totalWagesUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWagesUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap)
console.log("Total wage using map method :" + totalWagesUsingMap);
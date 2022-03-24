const IS_ABSENT =0;                      //UC1- absent or present
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HRS =4;
const FULL_TIME_HRS =8;
const WAGE_PER_HRS =20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 100;

let checkStatus  = Math.floor(Math.random() * 10) % 2;

if(checkStatus == IS_ABSENT)
{
    console.log("Employee is Absent!!");
}
else
{
    console.log("Employee is Present!!");
}

let empHrs = 0;                         ///UC2

function getWorkingHrs(checkStatus)               ///UC3 Refactor write function
{
    switch(checkStatus)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}

function calculateWage(empHrs)
{
    return empHrs * WAGE_PER_HRS
}

checkStatus = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHrs(checkStatus)
let empWage = empHrs * WAGE_PER_HRS;
console.log("Employee wage for a day is : "+empWage);

for(let i = 0; i < WORKING_DAYS_IN_MONTH ; i++)           ///UC4 Calculate Working days in month
{
    empHrs += getWorkingHrs(checkStatus) ;
}

empWage = empHrs * WAGE_PER_HRS;
console.log("Total Work hrs : "+empHrs+"  Total Employee wage for a Month is : "+empWage);



let total_empHrs = 0;                               ///UC5 Cal total working days
let total_workingDays = 0;         
let dailyWageArray = new Array();                ///UC6 Array

while(total_empHrs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
{
    total_workingDays++;
    total_empHrs += getWorkingHrs(checkStatus);
    dailyWageArray.push(calculateWage(empHrs))
}
empWage = calculateWage(total_empHrs);
console.log("Total Working days: "+total_workingDays+"  Total working HRS :"+total_empHrs+"  Total Employee wage : "+empWage);


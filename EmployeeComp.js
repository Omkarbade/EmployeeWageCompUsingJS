const IS_ABSENT =0;                ///UC1 ABSENT OR PRESENT

let checkStatus  = Math.floor(Math.random() * 10) % 2;

if(checkStatus == IS_ABSENT)
{
    console.log("Employee is Absent!!");
}
else
{
    console.log("Employee is Present!!");
}

const IS_PART_TIME =1;                 ///UC2  CAL DAILY WAGE
const IS_FULL_TIME =2;
const PART_TIME_HRS =4;
const FULL_TIME_HRS =8;
const WAGE_PER_HRS =20;
let empHrs = 0;

function getWorkingHrs(checkStatus)             ///UC3 REFACTOR
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

checkStatus = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHrs(checkStatus)
let empWage = empHrs * WAGE_PER_HRS;
console.log("Employee wage is : "+empWage);


const WORKING_DAYS_IN_MONTH = 20;       //uc4 working days in month

for(let i = 0; i < WORKING_DAYS_IN_MONTH ; i++)
{
    empHrs += getWorkingHrs(checkStatus) ;
}

empWage = empHrs * WAGE_PER_HRS;
console.log("Total Work hrs :"+empHrs+" Total Employee wage for a Month is : "+empWage);
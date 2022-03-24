const IS_ABSENT =0;                      //UC1- absent or present
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HRS =4;
const FULL_TIME_HRS =8;
const WAGE_PER_HRS =20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

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
let dailyWageArray = new Array();              ///UC6 Array
let empdailyWageMap = new Map();                ///UC8
let empdailyHrsMap = new Map();                 //uc9
let dailyWageAndHrsArray = new Array();                    //UC10

// while(total_empHrs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
// {
//     total_workingDays++;
//     total_empHrs += getWorkingHrs(checkStatus);
//     dailyWageArray.push(calculateWage(empHrs));
//     empdailyWageMap.set(total_workingDays,calculateWage(empHrs));
//     dailyHrsMap.set(total_workingDays,getWorkingHrs(checkStatus));     ///uc8
// }
empWage = calculateWage(total_empHrs);
console.log("Total Working days: "+total_workingDays+"  Total working Hours :"+total_empHrs+"  Total Employee wage : "+empWage);

let totalEmpWage = 0;                  //UC7A  total wage array for travrsal and reduce method
function sum (empWage)
{
    totalEmpWage += empWage;
}
dailyWageArray.forEach(sum);
console.log("Total Working days: "+total_workingDays+"  Total working Hours :"+total_empHrs+"  Total Employee wage : "+totalEmpWage);

function TotalWages(totalwages,dailyWage)
{
    return totalwages + dailyWage;
}
console.log("Employee wage with reduce : "+dailyWageArray.reduce(TotalWages,0));

let dayCounter = 0;               ///UC7B show day along with daily wage using array

function mapDayWithWage(dailyempWage)

{
    dayCounter ++;
    return dayCounter +" = "+ dailyempWage;
}

let mapDayWithWageArray = dailyWageArray.map(mapDayWithWage);
console.log("Daily wage Map :\n"+mapDayWithWageArray);

function fulltimeWage(dailyempWage)    ///UC7C show days when full time wage 160 were earned
{
    return dailyempWage.includes("160");
}

let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage);
console.log(" Daily Wage Filter When Fulltime Wage Earned:\n"+fullDayWageArray);

///UC7D find first occurance when full time wage was earn find function
console.log("First time fulltime wage was earn on day:\n"+mapDayWithWageArray.find(fulltimeWage));


function isAllFullTimeWage(dailyempWage)   //UC7E check full time wage is true
{
    return dailyempWage.includes("160");
}

console.log("All elements having full time wage: "+fullDayWageArray.every( isAllFullTimeWage ));

function isAnyPartTimeWage(dailyempWage)   ///uc7F check if there is any part time wage
{
    return dailyempWage.includes("80");
}

console.log("result for Part time wage : "+mapDayWithWageArray.some(isAnyPartTimeWage));


function TotalWorkedDays(numOfDays,dailyempWage)  //UC7G find no.s of days the emp worked
{
    if(dailyempWage >0)
    {
        numOfDays++;
    }
    return numOfDays;
}
console.log("Number of days Employee worked: "+dailyWageArray.reduce(TotalWorkedDays,0));

console.log(empdailyWageMap);                                 //UC8 use map to store day wages
console.log("Employee wage Total Hours :"+Array.from(empdailyWageMap.values()).reduce(TotalWages,0));


//UC9 Arrow Function
const findTotal  = (totalVal, dailyVal) => {
    return totalVal+ dailyVal;
}
let totalHours = Array.from(empdailyHrsMap.values()).filter(emphr=> emphr>0).reduce(findTotal,0);
let totalSalary = dailyWageArray.filter(totalEmpWage => totalEmpWage>0).reduce(findTotal,0);
console.log("Emp wage with Arrow :"+" Total Hours: "+totalHours+ " Total Wages: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empdailyHrsMap.forEach((value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);

///UC10 Object Creation

while(total_empHrs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
{
    total_workingDays++;
    total_empHrs += getWorkingHrs(checkStatus);
    dailyWageArray.push(calculateWage(empHrs));
    dailyWageAndHrsArray.push({
                    dayNum:total_workingDays,
                    dailyHrs:empHrs,
                    dailyWage: calculateWage(empHrs),
                    toString(){
                        return '\nDay '+this.dayNum+' =>Working Hrs is  '+this.dailyHrs+'  daily wage '+this.dailyWage
                    }
                });
    empdailyWageMap.set(total_workingDays,calculateWage(empHrs));
    empdailyHrsMap.set(total_workingDays,getWorkingHrs(checkStatus));
}


console.log(" showing Daily worked hr and Daily Wage Earned: "+dailyWageAndHrsArray);


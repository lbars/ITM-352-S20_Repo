day = 27;
month = "Sep";
year = 2000; 

Step1 = year % 100;
Step2 = parseInt(Step1/4);
Step3 = Step2 + Step1;
if (month == "Jan") {
    Step5 = day + Step3;
}
else {
    switch (month) {
        case "Feb":
            Step4 = 3; break;
        case "Mar":
            Step4 = 3; break;
        case "Apr":
            Step4 = 6; break;
        case "May":
            Step4 = 1; break;
        case "Jun":
            Step4 = 4; break;
        case "Jul":
            Step4 = 6; break;
        case "Aug":
            Step4 = 2; break;
        case "Sep":
            Step4 = 5; break;
        case "Oct":
            Step4 = 0; break;
        case "Nov":
            Step4 = 3; break;
        case "Dec":
            Step4 = 5; break;
    }
    Step6 = Step4 + Step3;
    Step7 = day + Step6;
}
Step8 = (typeof step5 !== 'undefined') ? Step5 : Step7;
isLeapYear = ((year % 4 == 0) && (year % 100 != 0) && (year % 400 == 0));
if (parseInt(year / 100) == 19) {
    if (isLeapYear) {
        if (month == "Jan" || month == "Feb") {
            Step9 = Step8 - 1;
        }
    }
}
else {
    if (isLeapYear) {
        if (month == "Jan" || month == "Feb") {
            Step9 = Step8 - 2;
        } else {
            Step9 = Step8 - 1;
        }
    } else {
        Step9 = Step8 - 1;
    }
}
Step9 = Step8 - 1;
Step10 = Step9 % 7;
if (Step10 == 0) {dow = 'Sunday';}
else if (Step10 == 1) {dow = 'Monday';}
else if (Step10 == 2) {dow = 'Tuesday';}
else if (Step10 == 3) {dow = 'Wednesday';}
else if (Step10 == 4) {dow = 'Thursday';}
else if (Step10 == 5) {dow = 'Friday';}
else if (Step10 == 6) {dow = 'Saturday';}

console.log(`${month}/${day}/${year} is a ${dow}.`);
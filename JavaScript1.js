//print string length using recursion


function strLen(str, cnt) {
    
    if (str.length) {
        return strLen(str.substr(1), ++cnt);
    } else {
        return cnt;
    }
}

console.log(strLen("asdfghjnbth",0));
console.log(strLen("7718608607",0));


//return any text

function hello() {
    return "hello edabit.com";
}

//return first no of arr

function getFirstValue(arr) {
    return arr[0];
}

//convert  Minutes to Seconds

function convert(minutes) {
    return (minutes * 60);
}

//convert Hours and  Minutes to Seconds

function convert(hours, minutes) {
    return ((hours * 3600) + (minutes * 60))
}

//Area of a Triangle

function triArea(base, height) {
    return ((base * height) / 2)
}

//Return the Sum of Two Numbers

function addition(a, b) {
    return (a + b);
}

//Seconds in Hours

function howManySeconds(hours) {
    return (hours * 60 * 60)
}

//Maximum Edge of a Triangle

function nextEdge(side1, side2) {
    return ((side1 + side2) - 1)
}

//Return the Remainder from Two Numbers

function remainder(x, y) {
    return (x % y)
}

//return squared

function squared(b) {
    return b * b;
}

//Return the Next Number from the Integer Passed

function addition(num) {
    return (num + 1)
}

//Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(num) {
    return (num <= 0)
}

//The Farm Problem

function animals(chickens, cows, pigs) {
    return ((chickens * 2) + (cows * 4) + (pigs * 4))
}

//Check if an Integer is Divisible By Five

function divisibleByFive(n) {
    if (Number.isInteger(n / 5)) {
        return true;
    }
    return false;
}
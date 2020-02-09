/***************************
 * Variables and data types
 */

/*
var firstName = "Sourabh";
console.log(firstName);

var lastName = "Karmarkar";
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable naming rules
var $3years = 3;
var johnMark = "John and mark";
var if = 23;
*/

/***************************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age +' year old '+ job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + 'is a ' + age +' year old '+ job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/***************************
 * Basic Operators
 */
/*
var year, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/***************************
 * Operator Precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;// 8 * 4 -6 // 32 -6 // 36
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
var markMass = 72 // kg;
var johnMass = 81 // kg;
var markHeight = 1.9 // meters;
var johnHeight = 2 // meters;
var markBMI = markMass / (markHeight * markHeight);
console.log("markBMI ---> " + markBMI);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("johnBMI ---> " + johnBMI);
var isMarkBMIHigher = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + isMarkBMIHigher);
*/

/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var markMass = 72 // kg;
var johnMass = 81 // kg;
var markHeight = 1.9 // meters;
var johnHeight = 2 // meters;
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
// var isMarkBMIHigher = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's? " + isMarkBMIHigher);
if(markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than John\'s');
}
else{
    console.log('John\'s BMI is higher than Mark\'s');
}
*/

/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 26;

if (age < 13){
    console.log(firstName + ' is a boy!');
}
else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager!');
}
else if (age >= 20 && age < 30) { // Between 20 and 30
    console.log(firstName + ' is a young man!');
}
else{
    console.log(firstName + ' is a man!');
}
*/

/*****************************
* The Ternary Operator and Switch Statements
*/

/*
var firstName = 'Sourabh';
var age = 12;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks '+ drink + '.');

if(age>=18){
    var drink = 'beer';
}
else{
    var drink = 'juice';
}

// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch(true){
    case age<13:
        console.log(firstName + ' is a boy!');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager!');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man!');
        break;
    default:
        console.log(firstName + ' is a man!');
        break;
}
*/

/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values

/*
var height;
height = 23;
if(height || height === 0){
    console.log('Variable is defined!');
}
else{
    console.log('Variable has not been defined!');
}

// Equality operators
if(height === '23'){
    console.log('The == operator does type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var johnTeamScore = [89, 120, 103];
var mikeTeamScore = [116, 94, 123];
var maryTeamScore = [97, 134, 105];

var johnTeamAverage = johnTeamScore.reduce(function(a, b) { return a + b; }, 0) / johnTeamScore.length;
var mikeTeamAverage = mikeTeamScore.reduce(function(a, b) { return a + b; }, 0) / mikeTeamScore.length;
var maryTeamAverage = maryTeamScore.reduce(function(a, b) { return a + b; }, 0) / maryTeamScore.length;

console.log('johnTeamAverage --->', johnTeamAverage);
console.log('mikeTeamAverage --->', mikeTeamAverage);
console.log('maryTeamAverage --->', maryTeamAverage);

if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage){
    console.log('John\'s team wins with ' + johnTeamAverage + ' points!');
} else if (mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage){
    console.log('Mike\'s team wins with ' + mikeTeamAverage + ' points!');
} else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage){
    console.log('Mary\'s team wins with ' + maryTeamAverage + ' points!');
} else {
    console.log('There is a draw!');
}
*/

/*****************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years!');
    }
    else {
        console.log(firstName + ' is already retired!');
    }
}
yearsUntilRetirement(1990, 'Sourabh');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'John');
*/

/*****************************
* Function Statements and Expressions
*/
/*
// Function Declaration
// function whatDoYouDo(job, firstName){}

// Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*****************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
var calculate_tip = function(amount){
    var tip;
    switch(true){
        case amount < 50:
            tip = amount * .2;
        case amount >= 50 && amount < 200:
            tip = amount * .15;
        default:
            tip = amount * .1;
    }
    return tip;
}

var bills = [124, 48, 268];
var tipsArray = [];
var finalAmtArray = [];
bills.forEach(billAmt => {
    var tipAmt = calculate_tip(billAmt);
    tipsArray.push(tipAmt);
    finalAmtArray.push(billAmt + tipAmt);
})

console.log("tipsArray ---> ", tipsArray);
console.log("finalAmtArray ---> ", finalAmtArray);
*/

/*****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1960;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var calculateBMI = function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
}
var mark = {
    fullName: "Mark Smith",
    mass: 72, // kg
    height: 1.9,  // meters
    calcBMI: calculateBMI
};
var john = {
    fullName: "John Smith",
    mass: 81, // kg
    height: 2, // meters
    calcBMI: calculateBMI
};
switch(true){
    case mark.calcBMI() > john.calcBMI():
        console.log(mark.fullName + ' has the highest BMI i.e ' + mark.BMI);
        break;
    case mark.BMI < john.BMI:
        console.log(john.fullName + ' has the highest BMI i.e ' + john.BMI);
        break;
    case mark.BMI === john.BMI:
        console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI i.e ' + john.BMI);
        break;
}
*/

/*****************************
* Loops and iteration
*/
/*
// For loop
for (var i = 0; i < 50; i += 4){
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for(var i = john.length - 1; i > -1; i--)
{
    console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var calculateTipJohn = function() {
    for(var i = 0; i < this.bills.length; i++){
        var billAmt = this.bills[i];
        var tip;
        switch(true){
            case billAmt < 50:
                tip = billAmt * .2;
                break;
            case billAmt >= 50 && billAmt < 200:
                tip = billAmt * .15;
                break;
            default:
                tip = billAmt * .1;
                break;
        }
        this.tips.push(tip);
        this.finalAmt.push(tip + billAmt);
    }
}

var calculateTipMark = function() {
    for(var i = 0; i < this.bills.length; i++){
        var billAmt = this.bills[i];
        var tip;
        switch(true){
            case billAmt < 100:
                tip = billAmt * .2;
                break;
            case billAmt >= 100 && billAmt < 300:
                tip = billAmt * .1;
                break;
            default:
                tip = billAmt * .25;
                break;
        }
        this.tips.push(tip);
        this.finalAmt.push(tip + billAmt);
    }
}

function calculateAvg(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum / tips.length;
}

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268,180 ,42],
    tips: [],
    finalAmt: [],
    calcTip: calculateTipJohn
}
var mark = {
    fullName: 'Mark Johnson',
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmt: [],
    calcTip: calculateTipMark
}
john.calcTip();
mark.calcTip();
john.average = calculateAvg(john.tips);
mark.average = calculateAvg(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
*/
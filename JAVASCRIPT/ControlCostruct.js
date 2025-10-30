// check either number is positive or negative.

let num = -4;
if (num >= 0){
    console.log("Positive Number");
}else{
    console.log("Negative Number");
}

// nested if - a student passes if marks >= 60. if marks >= 80, show "Distinction".

let marks = 85;

if(marks >= 60){
    if(marks >= 80){
        console.log("Distinction");
    }
    else{
        console.log("pass");
    }
}
else{
    console.log("not a distinction");
}

// switch case:
let grade = 'C';

switch (grade) {
    case 'A' :
        console.log("Excellent");
        break;

    case 'B' :
        console.log("Good");
        break;

    case 'C' : 
        console.log("Average");
        break;

    case 'D' :
        console.log("Poor");
        break;

    default :
        console.log("Fail");
}

// Print month season

let month = 5

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Rainy");
        break;

    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    
    default:
        console.log("Invalid Month");
}

// Loping Construct

// for loop: print first 10 natural Number
for(let i = 1; i<=10; i++){
    console.log(i);
}

// while loop: 

let i = 11;
while(i<=20){
    // console.log(i);
    process.stdout.write(i + " "); //print in single line.
    i++;
}
console.log()//move curser to the next line

// do while loop:
let j = 21;
do{
    console.log(j);
    j++;
} while(j<=30);


// for of loop: for of loop is used to iterate(travel) array element, without using index number.
let fruits = ["Apple", "Banana", "cherry", "Orange"];
for(let fruit of fruits){
    console.log(fruit);
}


// for in loop: in order to read all the key value pairs in object, we will use for in loop.
let student = {
    name: "Raj",
    age: 20,
    grade: "A"
};
console.log(student);
for(let key in student) {
    console.log(key + ": " + student[key]);
}


// forEach method: forEach is a method, used to iterate array element one by one and perform operation on each array element.
let number = [1,2,3,4,5];
number.forEach((num) => console.log(num*num));

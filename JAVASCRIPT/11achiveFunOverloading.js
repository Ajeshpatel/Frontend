// Achive function overloading using argument.
//not posible to declare arrow function and function expression.

function add() {
    if(arguments.length === 2) {
        return arguments[0] + arguments[1];
    }
    // else if(arguments.length === 2) {
    //     return arguments[0] + arguments[1];
    // }
    else if(arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }
    else if(arguments.length === 4) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    }
    else{
        return "Invalid Number of argument pass";
    }
}
console.log(add());
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log("-------------------------");


// Using Spread Operator:
function addition(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum = sum + num;
    }
    return sum;
}
console.log(addition());
console.log(addition(1));
console.log(addition(1,2));
console.log(addition(1,2,3));
console.log(addition(1,2,3,4));

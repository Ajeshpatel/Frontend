// Work Only in console.

let num = prompt("Enter Number: ")
console.log(num);

function oddeven(num) {
    let result = (num % 2 === 0) ? "Even" : "Odd"
    console.log(result);
}

oddeven(num);
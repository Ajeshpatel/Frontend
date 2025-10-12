// 1. Declaration of Array Using Square bracket
let dec = [1,2,3,4,5];
console.log("Declaration Of Array: ",dec); //  [ 1, 2, 3, 4, 5 ]
// Declaration of Array using Array constructor
let dec2 = new Array(8,9,10);
console.log("Declaration of Array: ",dec2); // [ 8, 9, 10 ]


// 2. Array Operation:

// .push()
let adlast = [10, 230, 34];
adlast.push(90);
console.log("Push Method: ", adlast); // [ 10, 230, 34, 90 ]
// .unshift()
let adfirst = [10, 230, 34];
adfirst.unshift(90);
console.log("unshift Method: ", adfirst); // [ 90, 10, 230, 34 ]

// .pop()
let removelast = [10, 230, 34];
removelast.pop();
console.log("Pop Method: ", removelast); // [ 10, 230 ]
// .shift()
let removefirst = [10, 230, 34];
removefirst.shift();
console.log("shift Method: ", removefirst); // [ 230, 34 ]


// 3. Modifying and Accessing Element

// splice()
let addrem = [2,3,45,67,88,78,98];
let newaddrem = addrem.splice(1, 3, 100, 100, "Hunter", true);
console.log("splice method: ", addrem);  // [ 2, 100, 100, 'Hunter', true, 88, 78, 98 ]
console.log("splice method: ", newaddrem); //[ 3, 45, 67 ]

let rem = [2,3,45,67,98];
let newrem = rem.slice(1, 3);
console.log("slice method: ", rem);
console.log("slice method: ", newrem); // [ 3, 45 ]

// 4. Array Searching and sorting

// .indexOf()
let searcharr = [1,34,5,6,7]
console.log("indexOf method: ", searcharr.indexOf(5)); // 2

// .include()
let arrinclude = searcharr.includes(7);
console.log("include method: ", arrinclude); // true

// .sort()
let searchChararr = ["agdf", "djdg", "sjdy", "bshdt"];
let sortChar = searchChararr.sort();
console.log("sort method: ", sortChar); // [ 'agdf', 'bshdt', 'djdg', 'sjdy' ]
let arrsortNum = searcharr.sort((a, b) => a-b);
console.log("sort method: ", arrsortNum); // [ 1, 5, 6, 7, 34 ]

// .reverse()
let arrReverse = searcharr.reverse();
console.log("reverse method: ", arrReverse); // [ 34, 7, 6, 5, 1 ]

// Array Iteration methods
// .forEach()
let fruits = ["Apple", "Banana", "Cherry", "Orange"];
fruits.forEach((fruit) => {
    console.log("forEach method: ",fruit);
})

// .map
let number = [3,2,5,7,8];
let squared = number.map((num) => num*num);
console.log("map mehtod", squared);

// .filter()
let evenNum = number.filter((even) => even % 2 == 0);
console.log("filter method: ", evenNum);

// .reduce()
let singleValue = number.reduce((num, sum) => num + sum, 0);
console.log("reduce method: ", singleValue);

// concat
let arr1 = [1, 3];
let arr2 = [2, 4];
let combined = arr1.concat(arr2);
console.log(combined);

// join
let words = ["Hello", "World"];
console.log(words);
let str = words.join(" ");
console.log(str);

// DeStructuring Array
let fruit = ["Apple", "Banana", "Orange", "Cherry"];
let [first, second, third] = fruit;
//let [a, b, c] = fruit;  //you can write anythings like a, b, c according to you.
console.log(first);
console.log(second);
console.log(third);
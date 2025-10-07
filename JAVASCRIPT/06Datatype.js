// Primitive datatype.

let a = 0/10;
console.log(a) //0

let b = 10/0;
console.log(b) //Infinity

let str = "String"
console.log(str); //String
console.log(typeof str); //string

var c =true;
console.log(c); //true
console.log(typeof c); //boolean

var d;
// console.log(x); //  not defined: when we will not declare the variable and not assign  the value.
console.log(d); //undefined: when we declare the variable but not assign the value. called undefined.

var z = null;
console.log(z); //null: if we dont need to initialize the value, then we assign value null, we gets null as result. null is object type.


// Non-primitive(or complex datatype)

// Function
function greet(){
    console.log("Hello JS");
}

// Array 
let arr = [10,20,30,40];
console.log(arr); // [10,20,30,40]
console.log(arr[2]); //30

//Object

let obj = {
    name: "Ajesh",
    id: 1,
    fun: function(){
        console.log("Function inside Object");
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.fun());
// Funcrion in JS.

// without parameter and without return type.
function addition(){
    let a = 20;
    let b = 10;
    let c = a+b;
    console.log(c);
}
addition();

// with parameter and without return type.
function addition2(a, b){
    let c = a+b;
    console.log(c);
}
addition2(10, 20);

// without parameter and with return type.
function addition3(){
    let a = 20;
    let b = 10;
    let c = a+b;
    return c;
}
console.log(addition3());

// with parameter and with return type.
function addition4(a, b){
    let c = a+b;
    return c;
}
console.log(addition4(10, 20));
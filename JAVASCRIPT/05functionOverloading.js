// Funcrion Overloaing in JS.
// multiple function having same function name , but different parameter called function overloading. 

// without parameter without return type.
function addition(){
    let a = 20;
    console.log(a);
}
addition();

// with parameter and without return type.
function addition(a,b){
    a = 5;
    b = 6;
    let c = a+b;
    console.log(c);
}
addition();

function addition(a,b,c){
    e = a+b + c;
    return e;
}
console.log(addition(5,6,7));

// with parameter and with return type.
function addition(a, b, c, d){
    f = a+b+c+d;
    return f;
}
console.log(addition(1,2,3,4));
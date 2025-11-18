// Lexical Environment or Scope chaining

let gvar = 10;

function outer() {
    let lvar  = 20;

    function inner() {
        let invar = 30;

        console.log(gvar);
        console.log(lvar);
        console.log(invar);
    }
    inner();
}

outer();
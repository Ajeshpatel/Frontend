// Exception Handling.
// Systex error you can not Handle, you can only handle the logical error.


// try, catch, finally
try{
    let a = 10/x;
    console.log(a);
}catch(err){
    console.log("Error Msg: ", err.message);
}finally{
    console.log("finally block will be run in any case, does not matter error is occur or not");
}

// try, catch
try{
    let a = 10/x;
    console.log(a);
}catch(err){
    console.log("Error Msg: ", err.message);
}


// try, throw, catch, finally
try{
    let b = 10;
    let x = 0;

    if (x === 0){
        throw new error("Division by Zero is not allowed");
    }

    let result = b/x;
    console.log(result);
}
catch(err){
    console.log("Custom Error Msg: ", err.message);
}
finally{
    console.log("END");
}
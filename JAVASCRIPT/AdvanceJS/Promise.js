// Promise In JS

p = new Promise((resolve, reject) => {
    app = "BMS";

    if (app === "BMS"){
        resolve("1. Open BMS");
    }else {
        reject("Please Consider BMS not fount");
        
    }
})
p.then((msg) => {
    console.log(msg)
    console.log("2. search movie");
})
.then(() => {
    console.log("3. select seat");
})
.then(() => {
    console.log("4. Ticket Booked");
})
.catch((e) => {
    console.log(e);
})
.finally(() => {
    console.log("Close BMS app");
});


// try to write inside setTimeOut function

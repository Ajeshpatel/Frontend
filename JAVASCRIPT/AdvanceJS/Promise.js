// Promise In JS

// p = new Promise((resolve, reject) => {
//     app = "BMS";

//     if (app === "BMS"){
//         resolve("1. Open BMS");
//     }else {
//         reject("Please Consider BMS not fount");
        
//     }
// })
// p.then((msg) => {
//     console.log(msg)
//     console.log("2. search movie");
// })
// .then(() => {
//     console.log("3. select seat");
// })
// .then(() => {
//     console.log("4. Ticket Booked");
// })
// .catch((e) => {
//     console.log(e);
// })
// .finally(() => {
//     console.log("Close BMS app");
// });


// try to write inside setTimeOut function

p = new Promise((resolve, reject) => {
    setTimeout(() => {
            app = "BS";

    if (app === "BMS"){
        resolve("1. Open BMS");
    }else {
        reject("Please Consider BMS not fount");
        
    }

    },3000)
});

p.then((app) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`2. Opened ${app}`);
            resolve();
        }, 2000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Search for a movie");
            resolve();
        }, 4000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Select seat");
            resolve();
        }, 8000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5. Ticket booked");
            resolve();
        }, 1000);
    });
})
.catch((e) => {
    console.log("Error Msg: ", e);
})
.finally(() => {
    setTimeout(() => {
        console.log("Closed phone");
    }, 6000)
});
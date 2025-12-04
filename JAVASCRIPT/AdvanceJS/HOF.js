// Higher Order function.

function order(callPrepare) {
    console.log("Coffee ordered");
    callPrepare();
}

function prepare() {
    console.log("start preparation");
}
// order(prepare);

// here order is Higher order function and callPrepare is callback function

function order(callPrepare, callDeliver) {
    console.log("Coffee ordered");
    callPrepare();
    callDeliver();
}

function prepare() {
    console.log("start preparation");
}

function deliver() {
    console.log("Order delivered");
}
order(prepare, deliver);
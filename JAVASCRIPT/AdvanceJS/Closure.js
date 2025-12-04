// here x is HOF.
function x() {
    var a = 10;
    return function y() {
        console.log(a);
    }
}
x();
// console.log(x()); // output: function y
const res = x();
// console.log(res); // output: function y
res();  // output: 10;


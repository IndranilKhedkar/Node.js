// const sum = function (a) {
//     return function (b) {
//         return b ? sum(a + b) : a;
//     }
// };

let sum = a => b => b ? sum(a + b) : a;

exports.sum = sum;

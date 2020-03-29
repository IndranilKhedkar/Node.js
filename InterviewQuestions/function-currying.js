const multiply = function (x, y) {
    return x * y;
}

const multiplyByTwo = multiply.bind(this, 2);
const multiplyByFive = multiply.bind(this, 5);

exports.multiply = multiply;
exports.multiplyByTwo = multiplyByTwo;
exports.multiplyByFive = multiplyByFive;


const greetUser = function (x, y) {
    return `${x} ${y}!`;
}

const greetGoodMorning = greetUser.bind(this, "Good Morning, ");
const greetGoodAfternoon = greetUser.bind(this, "Good Afternoon, ");
const greetGoodEvening = greetUser.bind(this, "Good Evening, ");

exports.greetUser = greetUser;
exports.greetGoodMorning = greetGoodMorning;
exports.greetGoodAfternoon = greetGoodAfternoon;
exports.greetGoodEvening = greetGoodEvening;



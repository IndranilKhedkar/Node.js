var http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


// Recursive Sum Function
const sum = require('./recursive-sum').sum;
console.info(`Sum = ${sum(1)(2)(10)()}`);
// Recursive Sum Function

// Function Currying
const functionCurrying = require('./function-currying');

// Bind
console.log(`Multiple 2 * 3 = ${functionCurrying.multiply(2, 3)}`);
console.log(`MultipleByTwo 2 * 3 = ${functionCurrying.multiplyByTwo(3)}`);
console.log(`MultipleByFive 5 * 3 = ${functionCurrying.multiplyByFive(3)}`);
// Bind

// Closure
console.log(`${functionCurrying.greetUser("Good Night, ", "Indranil")}`);
console.log(`${functionCurrying.greetGoodMorning("Indranil")}`);
console.log(`${functionCurrying.greetGoodAfternoon("Indranil")}`);
console.log(`${functionCurrying.greetGoodEvening("Indranil")}`);

// Closure

// Function Currying

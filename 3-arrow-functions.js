function sayHello() {
    console.log("Hello World")
}
sayHello()
console.log('--------------------------------------')
let sayHelloAr = () => {
    console.log("Hello World from Arrow Function")
}

sayHelloAr()

console.log('--------------------------------------')
function square(number) {
    return number * number
}

console.log(square(4))

let squareArrow = (number) => {
    return number * number;
}

console.log(squareArrow(5))

// When a function only have a single parameter-- you can skip the paranthesis (),
// in case of 0 or more than one paramenter-- it is mandatory 

let squareArrow1 = number => {
    return number * number;
}

console.log(squareArrow1(6))

// If number of statements in function body is one, we can skip the {}
// and return statement.
// If that single statement is an executable line [console.log(8)],
// It will print
// If that single statement is a value [number*number]
// It will be returned by default 

let squareArrow2 = number => number * number;

console.log((squareArrow2(7)))

// Multiple Parameters 
console.log('----------------------------------')
function add(a, b, c) {
    return a + b + c;
}

let addArrow = (a, b, c) => a + b + c;

console.log(addArrow(1, 2, 3))

function someCalc(a, b, c) {
    let d = a + b + c;
    let e = a - b + c;
    let f = d - e;
    return f;
}

let someCalcArrow = (a, b, c) => {
    let d = a + b + c;
    let e = a - b + c;
    let f = d - e;
    return f;
}

console.log(someCalcArrow(1, 2, 3))
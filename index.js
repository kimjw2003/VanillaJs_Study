// function sayHello(name, age){
//     console.log(`Hello ${name} you are ${age} years old`);

//     return `Hello ${name} you are ${age} years old`;
// }

// const greet = sayHello("lee", 20);
// console.log(greet);


const calculator = {
    plus: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    },
    div: function(a, b){
        return a/b;
    },
    remainder: function(a, b){
        return a%b;
    },
    power: function(a, b){
        return a**b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const mul = calculator.mul(5, 5);
const div = calculator.div(5, 5);
const remainder = calculator.remainder(5, 5);
const power = calculator.power(5, 5);


console.log(plus);
console.log(minus);
console.log(mul);
console.log(div);
console.log(remainder);
console.log(power);
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);

    return `Hello ${name} you are ${age} years old`;
}

const greet = sayHello("lee", 20);
console.log(greet);




const calculator = {
    plus: function(a, b){
        return a+b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);
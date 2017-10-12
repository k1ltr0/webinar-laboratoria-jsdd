/*

con listas:
    let fibonacci = [0, 1, 1, 2, 3, 5];

    ...

    console.log(first, second, last);


con objetos:

    let student = {
        "name": "Juanita",
        "lastname": "Perez",
        "age": 28
    };

    ...

    console.log(name, lastname);

*/


console.log("ES5:");
console.log("con listas:")

let fibonacci = [0, 1, 1, 2, 3, 5];

let first = fibonacci[0];
let second = fibonacci[1];
let last = fibonacci[fibonacci.length-1];

console.log(first, second, last);


console.log("con objetos:");

let student = {
    "name": "Juanita",
    "lastname": "Perez",
    "age": 28
};

let name = student["name"];
let lastname = student["lastname"];

console.log(name, lastname);

/**
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

console.log("ES6:");
console.log("con listas:")

let fibonacci = [0, 1, 1, 2, 3, 5];
let [first, second,,,, last] = fibonacci;
console.log(first, second, last);


console.log("con objetos:");

let student = {
    "name": "Juanita",
    "lastname": "Perez",
    "age": 28
};

let {name, lastname} = student;

console.log(name, lastname);

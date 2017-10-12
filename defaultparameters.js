
const sumar1 = function(a, b)
{
    return a + b;
};

sumar1(1)  // NaN

console.log("se llama sin un parametro", sumar1(1));

const sumar2 = function(a, b)
{
    let _a = a;
    let _b = b;

    if (a === undefined)
    {
        _a = 0;
    }

    if (b === undefined)
    {
        _b = 0;
    }

    return _a + _b;
};

console.log("se resuelve como en ES5", sumar2(1));

const sumar3 = function(a=0, b=0)
{
    return a + b;
};

console.log("se resuelve como en ES6", sumar3(1));

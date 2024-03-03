
// array destructuring
let [x, y] = ["a", "b"];

// swap
[x, y] = [y, x];

// property shorthand
let obj = { x, y };/*  */


// arguments
function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}

/*
é bom lembrar que a programação orientada a objetos em
JavaScript é feita por meio de um protótipo
*/
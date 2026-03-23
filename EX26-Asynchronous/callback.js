// exercise 30 callback

function oparete(a,b, callback){
    return callback(a,b)
}

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}
function mult(a,b){
    return a * b;
}
function divi(a,b){
    return a / b;
}

console.log('addition:', oparete(5,3, add));
console.log('subtraction:', oparete(8,2, sub));
console.log('multiplication:', oparete(5,5, mult));
console.log('divide:', oparete(20,5, divi));
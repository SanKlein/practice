var three = 3;
var zero = 0;
var divideByZero = three / zero;

console.log(divideByZero); // Infinity
console.log(Infinity === divideByZero) // true

var notANumber = zero / zero;
console.log(notANumber); // NaN
console.log(NaN === notANumber); // false
console.log(isNaN(notANumber)); // true

console.log(typeof null); // object
console.log(typeof undefined); // undefined

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

var person = {};
person.name = 'Parker';

var obj = new Object();
for (var prop in obj) {
  console.log(prop); // no enumerable properties inherited from Object
}

var arr = new Array();
for (var prop in arr) {
  console.log(prop);
}

Object.defineProperty(obj, 'objProp', { hey: 'hello' });
for (var prop in obj) {
  console.log(prop); // no enumerable properties inherited from Object
}

function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create) // If Object.create() is defined...
        return Object.create(p); // then just use it.
    var t = typeof p; // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}

var o = {} // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
var p = inherit(o); // p inherits properties from o and Object.prototype
p.y = 2;
o.x = 3;
console.log(p.x); // 3
p.x = 5;
console.log(p.x); // 5
console.log(o.x); // 3
o.x = 0;
console.log(p.x); // 5

// using bracket notation instead of charAt() to access characters
var name = 'parker';
var len = name.length;
for (var i = 0; i < len; i++) {
  console.log(name[i]);
}
console.log(Array.prototype.join.call(name, " "));

var myArray = [4, 5, 6];

console.log(myArray.join());
console.log(myArray.join(' '));
console.log(myArray.join(''));

console.log(myArray.slice(1,2));

function printArray(arr) {
  // element is property
  for (var element in arr) {
    console.log(element);
  }

  // element is value
  for (var element of arr) {
    console.log(element);
  }
}

console.log(1 in myArray);
console.log('balls' in myArray);
console.log(5 in myArray);
console.log('length' in myArray);

printArray(myArray);

function fillArrayWith3(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = 3;
  }
}

console.log(myArray.toString());

fillArrayWith3(myArray)

console.log(myArray.toString());


// closure practice
function everyday(val) {
  return function(str) {
    return val + ' ' + str;
  }
}

var mission = everyday('get money');
console.log(mission('everday'));
console.log(mission('every once in a while'));
console.log(everyday('get money')('do work'));

for(var i = 0; i < 10; i++) {
  (function(e) {
    setTimeout(function() {
      console.log(e);
    }, 1000);
  })(i);
}

function returnValue(val) {
  function innerValue() {
    console.log(val);
  }
  return innerValue;
}

for (var i = 0; i < 10; i++) {
  setTimeout(returnValue(i), 1000);
}

function test() { // a scope
  for(var i = 0; i < 10; i++) { // not a scope
    // count
  }
  console.log(i); // 10
}

test();

function letTest() { // a scope
  for(let i = 0; i < 10; i++) { // not a scope
    // count
  }
  console.log(i); // 10
}

letTest();

if (!SomeImportantThing) {
  var SomeImportantThing = {};
}

// try {
//   if (!SomeImportantThing2) {
//     let SomeImportantThing2 = {};
//   }
// } catch(e) {
//   console.log(e);
// }

var newArray = [1, 2, 3];
console.log(typeof newArray);
console.log(Object.prototype.toString.call(newArray));

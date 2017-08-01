var myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject); // { '0': 'f', '1': 'o', '2': 'o' }


var myString = new String('foo');
console.log(myString); // [String: 'foo']
console.log(myString.toString()); // foo


var myArray = new Array();
console.log(myArray.test);
Array.prototype.test = 'test';
console.log(myArray.test);


// for (var x in window) {
//   console.log(x);
// }

Object.prototype.balls = 'big';

var cody = new Object();
for (var key in cody) {
  console.log(key);
  if (cody.hasOwnProperty(key)){
    console.log(key);
  }
}

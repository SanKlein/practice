
var scope = "global scope";          // A global variable
function checkscope() {
    var scope = "local scope";       // A local variable
    function f() { return scope; }   // Return the value in scope here
    return f();
}
checkscope()                         // => "local scope"


var scope = "global scope";          // A global variable
function checkscope() {
    var scope = "local scope";       // A local variable
    function f() { return scope; }   // Return the value in scope here
    return f;
}
checkscope()()                       // => "local scope"


var uniqueInteger = (function() {          // Define and invoke
   var counter = 0;  // Private state of function below
   return function() { return counter++; };
}());

function counter() {
   var n = 0;
   return {
       count: function() { return n++; },
       reset: function() { n = 0; }
   };
}

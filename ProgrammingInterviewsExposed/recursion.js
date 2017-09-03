function factorial(n) {
  if (n > 1) {
    return factorial(n - 1) * n;
  } else {
    return 1;
  }
}

function binarySearch(arr, val) {
  var low = 0, high = arr.length - 1;
  var mid = Math.floor(high / 2);

  if (low > high) return -1;

  if (val === arr[mid]) {
    return mid;
  } else if (val < arr[mid]) {
    return binarySearch(arr.slice(0, mid), val);
  } else {
    var found = binarySearch(arr.slice(mid + 1), val);
    if (found >= 0) return mid + 1 + found;
    return -1;
  }
}

var array = [1, 3, 5, 7, 9, 11, 13];
// console.log(binarySearch(array, 12));

function stringPermutations(str) {
  stringPermutationsHelper('', str);
}

function stringPermutationsHelper(og, rest) {
  var len = rest.length;
  if (len === 1) console.log(og + rest);
  for (var i = 0; i < len; i++) {
    stringPermutationsHelper(og + rest.charAt(i), rest.slice(0, i) + rest.slice(i + 1));
  }
}

// stringPermutations('hat');

function stringCombinations(str) {
  for (var i = 0; i < str.length; i++) {
    stringCombinationsHelper(str, 0, i, '');
  }
}

function stringCombinationsHelper(str, start, depth, prefix) {
  for (var i = start; i < str.length; i++) {
    var next = prefix + str[i];
    if (depth > 0) {
      stringCombinationsHelper(str, i + 1, depth - 1, next);
    } else {
      console.log(next);
    }
  }
}

stringCombinations('hat');

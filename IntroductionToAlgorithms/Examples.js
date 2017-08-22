// Yes, these are terrible variables names

// practice array
var array1 = [5, 7, 0, 3, 9, 1, 4, 3, 2, 6, 5, 8];


// insertion sort algorithm on an array A
var insertionSort = function(A) {
  var i, j, key;
  for (j = 1; j < A.length; j++) {
    key = A[j];
    // insert A[j] into the sorted sequence A[1..j-1]
    i = j - 1;
    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i = i - 1;
    }
    A[i + 1] = key;
  }
  return A;
}

// console.log(insertionSort(array1));


// merge function used by mergeSort
var merge = function(A, low, mid, high) {
  var lowLen, highLen, Left, Right, i, j, k;
  lowLen = mid - low;
  highLen = high - mid - 1;
  Left = [];
  Right = [];
  for (i = 0; i < lowLen; i++) {
    Left[i] = A[low + i];
  }
  for (j = 0; j < highLen; j++) {
    Right[j] = A[mid + j];
  }
  i = 0;
  j = 0;
  for (k = low; k < high; k++) {
    if (Left[i] <= Right[j]) {
      A[k] = Left[i];
      i = i + 1;
    } else {
      A[k] = Right[j];
      j = j + 1;
    }
  }
  return A;
}

// merge sort algorithm on A
function mergeSort(A, low, high) {
  var mid;
  if (low < high) {
    mid = Math.floor((low + high) / 2);
    A = mergeSort(A, low, mid);
    A = mergeSort(A, mid + 1, high);
    A = merge(A, low, mid, high);
  }
  return A;
}

// console.log(mergeSort(array1, 0, array1.length - 1));


// find max of crossing sub array
var findMaxCrossingSubarray= function(A, low, mid, high) {
  var leftSum = -Infinity;
  var sum = 0;
  var maxLeft = 0;
  for (var i = mid; i >= low; i--) {
    sum = sum + A[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  var rightSum = -Infinity;
  sum = 0;
  var maxRight = 0;
  for (var j = mid + 1; j < high; j++) {
    sum = sum + A[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }
  return [maxLeft, maxRight, leftSum + rightSum];
}

// return the maximum sub array
function findMaxSubarray(A, low, high) {
  if (high === low) {
    return [low, high, A[low]];
  }
  var leftLow, leftHigh, leftSum, rightLow, rightHigh, rightSum, crossLow, crossHigh, crossSum;
  var mid = Math.floor((low + high) / 2);
  [leftLow, leftHigh, leftSum] = findMaxSubarray(A, low, mid);
  [rightLow, rightHigh, rightSum] = findMaxSubarray(A, mid + 1, high);
  [crossLow, crossHigh, crossSum] = findMaxCrossingSubarray(A, low, mid, high);
  if (leftSum >= rightSum && leftSum >= crossSum) {
    return [leftLow, leftHigh, leftSum];
  } else if (rightSum >= leftSum && rightSum >= crossSum) {
    return [rightLow, rightHigh, rightSum];
  } else {
    return [crossLow, crossHigh, crossSum];
  }
}

var arrayMax = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(findMaxSubarray(arrayMax, 0, arrayMax.length - 1));

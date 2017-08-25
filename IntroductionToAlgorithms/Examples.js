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

// algorithm for the maximum sub array problem
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

// var arrayMax = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// console.log(findMaxSubarray(arrayMax, 0, arrayMax.length - 1));


// square matrix multiplication
var squareMatrixMultiply = function(A, B) {
  var len = A.length;
  var C = [];
  for (var i = 0; i < len; i++) {
    C[i] = [];
    for (var j = 0; j < len; j++) {
      C[i] = C[i].concat(0);
    }
  }
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      for (var k = 0; k < len; k++) {
        C[i][j] = C[i][j] + (A[i][k] * B[k][j]);
      }
    }
  }
  return C;
}

// var arrayA = [[1, 2], [3, 4]];
// var arrayB = [[2, 0], [1, 2]];
// console.log(squareMatrixMultiply(arrayA, arrayB));

var candidates = [];

function hireAssistant(n) {
  var best = 0; // candidate 0 is a least-qualified dummy candidate
  for (var i = 0; i < candidates.length; i++) {
    var performance = interview(candidates[i]);
    if (performance > best) {
      best = performance;
      hire(candidates[i])
    }
  }
}

function permuteBySorting(A) {
  var n = A.length;
  var P = [];
  for (var i = 0; i < n; i++) {
    P[i] = Math.floor(Math.random() * Math.pow(n,3));
  }
  // sort A, using P as sort keys
}

function randomizeInPlace(A) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    var rand = Math.floor(Math.rand() * n);
    var temp = A[i];
    A[i] = A[rand];
    A[rand] = temp;
  }

  return A;
}


// heaps
function parent(i) {
  return i / 2;
}

function left(i) {
  return 2 * i;
}

function right(i) {
  return 2 * i + 1;
}

function maxHeapify(A, i) {
  l = left(i);
  r = right(i);
  var largest, temp;
  if (l <= A.heapSize && A[l] > A[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= A.heapSize && A[r] > A[largest]) {
    largest = r;
  }
  if (largest !== i) {
    temp = A[i];
    A[i] = A[largest];
    A[largest] = temp;
    maxHeapify(A, largest);
  }
}

var buildMaxHeap = function(A) {
  A.heapSize = A.length;
  for (var i = A.length / 2 - 1; i >= 0; i--) {
    maxHeapify(A, i);
  }
};

var heapsort = function(A) {
  buildMaxHeap(A);
  var temp;
  for (var i = A.length - 1; i >= 1; i--) {
    temp = A[1];
    A[1] = A[i];
    A[i] = temp;
    A.heapSize = A.heapSize - 1;
    maxHeapify(A, 1);
  }
};

var heapExtractMax = function(A) {
  if (A.heapSize < 1) {
    throw Exception("heap underflow");
  }
  var max = A[0];
  A[0] = A[A.heapSize];
  A.heapSize = A.heapSize - 1;
  maxHeapify(A, 1);
  return max;
};

var heapIncreaseKey = function(A, i, key) {
  if (key < A[i]) {
    throw Exception("new key is smaller than current key");
  }
  A[i] = key;
  var temp;
  while (i > 1 && A[parent(i)] < A[i]) {
    temp = A[i];
    A[i] = A[parent(i)];
    A[parent(i)] = temp;
    i = parent(i);
  }
};

var maxHeapInsert = function(A, key) {
  A.heapSize = A.heapSize + 1;
  A[A.heapSize] = -Infinity;
  heapIncreaseKey(A, A.heapSize, key);
};


// quicksort
function quickSort(A, p, r) {
  if (p < r) {
    var q = partition(A, p, r);
    A = quickSort(A, p, q - 1);
    A = quickSort(A, q + 1, r);
  }
  return A;
}

var partition = function(A, p, r) {
  var x = A[r];
  var i = p - 1;
  var temp;
  for (var j = p; j <= r - 1; j++) {
    if (A[j] <= x) {
      i++;
      temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  }
  temp = A[i + 1];
  A[i + 1] = A[r];
  A[r] = temp;
  return i + 1;
};

var randomizedPartition = function(A, p, r) {
  var i = Math.floor(Math.random() * (r - p));
  var temp = A[r];
  A[r] = A[i];
  A[i] = temp;
  return partition(A, p, r);
};

function randomizedQuickSort(A, p, r) {
  if (p < r) {
    var q = randomizedPartition(A, p, r);
    A = randomizedQuickSort(A, p, q - 1);
    A = randomizedQuickSort(A, q + 1, r);
  }
  return A;
}


// counting sort
var countingSort = function(A, B, k) {
  var C = [];
  for (var i = 0; i <= k; i++) {
    C[i] = 0;
  }
  for (var j = 0; j < A.length; j++) {
    C[A[j]] = C[A[j]] + 1;
  }
  // C[i] now contains the number of elements equal to i
  for (var i = 0; i <= k; i++) {
    C[i] = C[i] + C[i-1];
  }
  // C[i] now contains the number of elements less than or equal to i
  for (var j = A.length - 1; j >= 0; j--) {
    B[C[A[j]]] = A[j];
    C[A[j]] = C[A[j]] - 1;
  }
};

// bucket sort
var bucketSort = function(A) {
  var B = [];
  var n = A.length;
  for (var i = 0; i <= n; i++) {
    B[i] = [];
  }
  for (var i = 0; i < n; i++) {
    B[n * A[i]] = A[i];
  }
  for (var i = 0; i < n; i++) {
    insertionSort(B[i]);
  }
  // concatenate the lists B[0], B[1], ..., B[n - 1] together in order
};


// minimum and maximum
var minimum = function(A) {
  var min = A[0];
  for (var i = 1; i < A.length; i++) {
    if (min > A[i]) {
      min = A[i];
    }
  }
  return min;
};

function randomizedSelect(A, p, r, i) {
  if (p == r) {
    return A[p];
  }
  var q = randomizedPartition(A, p, r);
  var k = q - p + 1;
  if (i === k) {
    return A[q];
  } else if (i < k) {
    return randomizedSelect(A, p, q - 1, i);
  } else {
    return randomizedSelect(A, q + 1, r, i - k);
  }
}


// stacks
var stackEmpty = function(S) {
  if (S.top === 0) {
    return true;
  } else {
    return false;
  }
};

var push = function(S, x) {
  S.top = S.top + 1;
  S[S.top] = x;
};

var pop = function(S) {
  if (stackEmpty(S)) {
    throw Exception('underflow');
  } else {
    S.top = S.top - 1;
    return S[S.top + 1];
  }
};


// queue
var enqueue = function(Q, x) {
  Q[Q.tail] = x;
  if (Q.tail == Q.length) {
    Q.tail = 1;
  } else {
    Q.tail = Q.tail + 1;
  }
};

var dequeue = function(Q) {
  x = Q[Q.head];
  if (Q.head == Q.length) {
    Q.head = 1;
  } else {
    Q.head = Q.head + 1;
  }
  return x;
};


// linked lists
var listSearch = function(L, k) {
  var x = L.head;
  while (x !== null && x.key !== k) {
    x = x.next;
  }
  return x;
};

var listInsert = function(L, x) {
  x.next = L.head;
  if (L.head !== null) {
    L.head.prev = x;
  }

  L.head = x;
  x.prev = null;
};

var listDelete = function(L, x) {
  if (x.prev != null) {
    x.prev.next = x.next;
  } else {
    L.head = x.next;
  }
  if (x.next != null) {
    x.next.prev = x.prev;
  }
};

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


// binary search trees
function inorderTreeWalk(x) {
  if (x !== null) {
    inorderTreeWalk(x.left);
    console.log(x.key);
    inorderTreeWalk(x.right);
  }
}

function treeSearch(x, k) {
  if (x === null || k == x.key) {
    return x;
  }
  if (k < x.key) {
    return treeSearch(x.left, k);
  } else {
    return treeSearch(x.right, k);
  }
}

var iterativeTreeSearch = function(x, k) {
  while (x !== null && k !== x.key) {
    if (k < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
    return x;
  }
};

var treeMinimum = function(x) {
  while (x.left !== null) {
    x = x.left;
  }
  return x;
};

var treeMaximum = function(x) {
  while (x.right !== null) {
    x = x.right;
  }
  return x;
};

var treeSuccessor = function(x) {
  if (x.right !== null) {
    return treeMinimum(x.right);
  }
  var y = x.p;
  while (y !== null && x == y.right) {
    x = y;
    y = y.p;
  }
  return y;
};

var treeInsert = function(T, z) {
  var y = null;
  var x = T.root;
  while (x !== null) {
    y = x;
    if (z.key < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
    z.p = y;
    if (y == null) {
      T.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
    return T;
  }
};

var transplant = function(T, u, v) {
  if (u.p === null) {
    T.root = v;
  } else if (u === u.p.left) {
    u.p.left = v;
  } else {
    u.p.right = v;
  }
  if (v !== null) {
    v.p = u.p;
  }
};

var treeDelete = function(T, z) {
  if (z.left === null) {
    transplant(T, z, z.right);
  } else if (z.right === null) {
    transplant(T, z, z.left);
  } else {
    y = treeMinimum(z.right);
    if (y.p !== z) {
      transplant(T, y, y.right);
      y.right = z.right;
      y.right.p = y;
    }
    transplant(T, z, y);
    y.left = z.left;
    y.left.p = y;
  }
}


// red-black trees
var leftRotate = function(T, x) {
  var y = x.right;
  x.right = y.left;
  if (y.left !== T.nil) {
    y.left.p = x;
  }
  y.p = x.p;
  if (x.p === T.nil) {
    T.root = y;
  } else if (x === x.p.left) {
    x.p.left = y;
  } else {
    x.p.right = y;
  }
  y.left = x;
  x.p = y;
};

var rbInsert = function(T, z) {
  var y = T.nil;
  var x = T.root;
  while (x !== T.nil) {
    y = x;
    if (z.key < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
  }
  z.py = y;
  if (y === T.nil) {
    T.root = z;
  } else if (z.key < y.key) {
    y.left = y;
  } else {
    y.right = z;
  }
  z.left = T.nil;
  z.right = T.nil;
  z.color = red;
  rbInsertFixup(T, z);
}

var rbInsertFixup = function(T, z) {
  while (z.p.color == red) {
    if (z.p == z.p.p.left) {
      y = z.p.p.right;
      if (y.color == red) {
        z.p.color = black;
        y.color = black;
        z.p.p.color = red;
        z = z.p.p;
      } else if (z === z.p.right) {
        z = z.p;
        leftRotate(T, z);
        z.p.color = black;
        z.p.p.color = red;
        rightRotate(T, z.p.p);
      }
    } else {
      y = z.p.p.left;
      if (y.color == red) {
        z.p.color = black;
        y.color = black;
        z.p.p.color = red;
        z = z.p.p;
      } else if (z === z.p.left) {
        z = z.p;
        rightRotate(T, z);
        z.p.color = black;
        z.p.p.color = red;
        leftRotate(T, z.p.p);
      }
    }
  }
  T.root.color = black;
};

var rbTransplant = function(T, u, v) {
  if (u.p === T.nil) {
    T.root = v;
  } else if (u == u.p.left) {
    u.p.left = v;
  } else {
    u.p.right = v;
  }
  v.p = u.p;
};

var rbDelete = function(T, z) {
  var y = z;
  var yOriginalColor = y.color;
  var x;
  if (z.left === T.nil) {
    x = z.right;
    rbTransplant(T, z, z.right);
  } else if (z.right === T.nil) {
    z = z.left;
    rbTransplant(T, z, z.left);
  } else {
    y = treeMinimum(z.right);
    yOriginalColor = y.color;
    x = y.right;
    if (y.p === z) {
      x.p = y;
    } else {
      rbTransplant(T, y, y.right);
      y.right = z.right;
      y.right.p = y;
    }
    rbTransplant(T, z, y);
    y.left = z.left;
    y.left.p = y;
    y.color = z.color;
  }
  if (yOriginalColor === black) {
    rbDeleteFixup(T, x);
  }
};


// rod cutting problem
function cutRod(p, n) {
  if (n === 0) {
    return 0;
  }
  var q = -Infinity;
  for (var i = 0; i < n; i++) {
    q = Math.max(q, p[i] + cutRod(p, n - i));
  }
  return q;
}

function memoizedCutRod(p, n) {
  var r = [];
  for (var i = 0; i < n; i++) {
    r[i] = -Infinity;
  }
  return memoizedCutRodAux(p, n, r);
}

function memoizedCutRodAux(p, n, r) {
  var q;
  if (r[n] >= 0) {
    return r[n];
  }
  if (n == 0) {
    q = 0;
  } else {
    q = -Infinity;
    for (var i = 0; i < n; i++) {
      q = Math.max(q, p[i] + memoizedCutRodAux(p, n - i, r));
    }
  }
  r[n] = q;
  return q;
}

var bottomUpCutRod = function(p, n) {
  var r = [];
  var q;
  r[0] = 0;
  for (var j = 0; j < n; j++) {
    q = -Infinity;
    for (var i = 0; i < j; i++) {
      q = max(q, p[i] + r[j - 1]);
    }
    r[j] = q;
  }
  return r[n];
};

var extendedBottomUpCutRod = function(p, n) {
  var q, r = [], s = [];
  for (var j = 0; j < n; j++) {
    q = -Infinity;
    for (var i = 0; i < j; i++) {
      if (q < p[i] + r[j - i]) {
        q = p[i] + r[j - i];
        s[j] = i;
      }
    }
    r[j] = q;
  }
  return { r, s };
};

var printCutRodSolution = function(p, n) {
  var { r, s} = extendedBottomUpCutRod(p, n);
  while (n > 0) {
    console.log(s[n]);
    n = n - s[n];
  }
};

// p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
// printCutRodSolution(p, 10);


// greedy algorithms
function recursiveActivitySelector(s, f, k, n) {
  var m = k + 1;
  while (m <= n && s[m] < f[k]) {
    m = m + 1;
  }
  if (m <= n) {
    return s[m].concat(recursiveActivitySelector(s, f, m, n));
  } else {
    return;
  }
}

var greedyActivitySelector = function(s, f) {
  var n = s.length;
  var A = s[0];
  var k = 1;
  for (var m = 1; m < n; m++) {
    if (s[m] >= f[k]) {
      A = A.concat(s[m]);
      k = m;
    }
  }
  return A;
}


// huffman codes
var huffman = function(C) {
  var n = Math.abs(C);
  var Q = C;
  for (var i = 0; i < n; i++) {
    var z = new Node();
    z.left = x = extractMin(Q);
    z.right = y = extractMin(Q);
    z.freq = x.freq + y.freq;
    insert(Q, z);
  }
  return extractMin(Q);
};


// graph algorithms
// breadth-first search
var bfs = function(G, s) {
  for (v in G) {
    if (v !== s) {
      v.color = 'white';
      v.d = Infinity;
      v.p = null;
    }
  }
  s.color = 'gray';
  s.d = 0;
  s.p = null
  var Q = [];
  Q = enqueue(Q, s);
  while (Q.length) {
    var u = dequeue(Q);
    G.Adj[u].forEach(function(v) {
      if (v.color === 'white') {
        v.color = 'gray';
        v.d = u.d + 1;
        v.p = u;
        Q = enqueue(Q, v);
      }
    });
    u.color = 'black';
  }
};

function printPath(G, s, v) {
  if (v === s) {
    console.log(s);
  } else if (v.p === null) {
    console.log('no path from ' + s + ' to ' + v);
  } else {
    printPath(G, s, v.p);
    console.log(v);
  }
}

// depth-first search
var dfs = function(G) {
  G.V.forEach(function(u) {
    u.color = 'white';
    u.p = null;
  });
  time = 0;
  G.V.forEach(function(u) {
    if (u.color === 'white') {
      dfsVisit(G, u);
    }
  });
};

function dfsVisit(G, u) {
  time++;
  u.d = time;
  u.color = 'gray';
  G.Adj[u].forEach(function(v) {
    if (v.color === 'white') {
      v.p = u;
      dfsVisit(G, v);
    }
  });
  u.color = 'black';
  time++;
  u.f = time;
}

// minimum spanning trees
// kruskals algorithm
var mstKruskal(G, w) {
  var A = [];
  G.V.forEach(function(v) {
    makeSet(v);
  });
  G.E.sort(function(a, b) {
    return w(a) - w(b);
  });
  G.E.forEach(function(v, u) {
    if (findSet(u) !== findSet(v)) {
      A.push((u,v);
      union(u, v);
    }
  })
  return A;
}

// prim's algorithm
var mstPrim = function(G, w, r) {
  G.V.forEach(function(u) {
    u.key = Infinity;
    u.p = null;
  });
  r.key = 0;
  var Q = G.V;
  while (Q.length) {
    u = extractMin(Q);
    G.Adj[u].forEach(function(v) {
      if (Q === findSet(v) && w(u, v) < v.key) {
        v.p = u;
        v.key = w(u, v);
      }
    });
  }
};

// shortest path algorithms
var initializeSingleSource = function(G, s) {
  G.V.forEach(function(v) {
    v.d = Infinity;
    v.p = null;
  });
  s.d = 0;
};

var relax = function(u, v, w) {
  if (v.d > u.d + w(u, v)) {
    v.d = u.d + w(u, v);
    v.p = u;
  }
};

//bellman-ford algorithm
var bellmanFord = function(G, w, s) {
  initializeSingleSource(G, s);
  for (var i = 0; i < G.V.length; i++) {
    G.E.forEach(function(u, v) {
      relax(u, v, w);
    });
  }
  G.E.forEach(function(u, v) {
    if (v.d > u.d + w(u, v)) {
      return false;
    }
  });
  return true;
};

var dagShortestPaths = function(G, w, s) {
  G.V = topologicallySort(G.V);
  initializeSingleSource(G, s);
  G.V.forEach(function(u) {
    G.Adj[u].forEach(function(v) {
      relax(u, v, w);
    });
  });
};

var dijkstra = function(G, w, s) {
  initializeSingleSource(G, s);
  var S = [];
  var Q = G.V;
  while (Q.length) {
    var u = extractMin(Q);
    S.push(u);
    G.Adj[u].forEach(function(v) {
      relax(u, v, w);
    });
  }
};


// square matrix multiply
var squareMatrixMultiply = function(A, B) {
  var n = A.length;
  var C = [];
  var i, j, k;
  for (i = 0; i < n; i++) {
    C[i] = [];
  }
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      C[i][j] = 0;
      for (k = 0; k < n; k++) {
        C[i][j] = C[i][j] + A[i][k] * A[k][j];
      }
    }
  }
  return C;
};

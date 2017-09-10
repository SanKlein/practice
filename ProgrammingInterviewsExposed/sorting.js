// selection selection
function selectionSort(data) {
  data = selectionSortRecursive(data, 0);
  return data;
}

function selectionSortRecursive(data, start) {
  if (start < data.length - 1) {
    var minPos = start;

    for (var i = start; i < data.length; ++i) {
      if (data[i] < data[minPos]) {
        minPos = i;
      }
    }

    var temp = data[start];
    data[start] = data[minPos];
    data[minPos] = temp;

    data = selectionSortRecursive(data, start + 1);
  }

  return data
}

var arr = [5, 7, 3, 4, 26, 8, 0];
console.log(selectionSort(arr));


// insertion sort
function insertionSort(data) {
  for (var i = 0; i < data.length; i++) {
    var val = data[i];

    for (var j = 0; j < i; j++) {
      if (data[j] > val) {
        var temp = data[j];
        data[j] = val;
        val = temp;
      }
    }
  }
  return data;
}

console.log(insertionSort(arr));


// quick sort
function quickSort(data) {
  if (data.length < 2) {
    return data;
  }

  var pivotIndex = Math.floor(data.length / 2),
      pivotValue = data[pivotIndex],
      leftCount = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i] < pivotValue) {
      leftCount++;
    }
  }

  var left = new Array(leftCount),
      right = new Array(data.length - leftCount - 1),
      l = 0,
      r = 0,
      val;

  for (var i = 0; i < data.length; i++) {
    if (i == pivotIndex) {
      continue;
    }

    val = data[i];

    if (val < pivotValue) {
      left[l++] = val;
    } else {
      right[r++] = val;
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  return left.concat(pivotValue, right);
}

console.log(quickSort(arr));


function mergeSort(data) {
  if (data.length < 2) {
    return data;
  }

  var mid = Math.floor(data.length / 2),
      left = data.slice(0, mid),
      right = data.slice(mid);

      mergeSort(left);
      mergeSort(right);

      return merge(data, left, right);
}

function merge(dest, left, right) {
  var dind = 0,
      lind = 0,
      rind = 0;

  while (lind < left.length && rind < right.length) {
    if (left[lind] <= right[rind]) {
      dest[dind++] = left[lind++];
    } else {
      dest[dind++] = right[rind++];
    }
  }

  while (lind < left.length) {
    dest[dind++] = left[lind++];
  }

  while (rind < right.length) {
    dest[dind++] = right[rind++]
  }

  return dest;
}

var arr2 = [3, 4, 9, 1, 0, 76, 3, 25, 5];
console.log(mergeSort(arr2));

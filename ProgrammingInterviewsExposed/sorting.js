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

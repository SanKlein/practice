function MinCoinChange(coins){
  var coins = coins;
  var cache = {};

  this.makeChange = function(amount) {
    var me = this;
    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount];
    }
    var min = [], newMin, newAmount;
    for (var i=0; i<coins.length; i++){
      var coin = coins[i];
      newAmount = amount - coin;
      if (newAmount >= 0){
        newMin = me.makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length-1 || !min.length)
        && (newMin.length || !newAmount))
        {
          min = [coin].concat(newMin);
          console.log('new Min ' + min + ' for ' + amount);
        }
    }
    return (cache[amount] = min);
  };
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));


function knapSack(capacity, weights, values, n) {

  var i, w, a, b, kS = [];

  for (i = 0; i <= n; i++) {
    kS[i] = [];
  }

  for (i = 0; i <= n; i++){
    for (w = 0; w <= capacity; w++){
      if (i == 0 || w == 0){
        kS[i][w] = 0;
      } else if (weights[i-1] <= w){
        a = values[i-1] + kS[i-1][w-weights[i-1]];
        b = kS[i-1][w];
        kS[i][w] = (a > b) ? a : b;
      } else{
        kS[i][w] = kS[i-1][w];
      }
    }
  }
  return kS[n][capacity];
}

function findValues(n, capacity, kS, weights, values){
  var i=n, k=capacity;
  console.log('Items that are part of the solution:');

  while (i>0 && k>0){
    if (kS[i][k] !== kS[i-1][k]){
      console.log('item '+i+' can be part of solution w,v: ' +
      weights[i-1] + ',' + values[i-1]);
      i--;
      k = k - kS[i][k];
    } else {
      i--;
    }
  }
}

var values = [3,4,5],
weights = [2,3,4],
capacity = 5,
n = values.length;
console.log(knapSack(capacity, weights, values, n));


function lcs(wordX, wordY) {

  var m = wordX.length,
  n = wordY.length,
  l = [],
  i, j, a, b;

  for (i = 0; i <= m; ++i) {
    l[i] = [];
    for (j = 0; j <= n; ++j) {
      l[i][j] = 0;
    }
  }

  for (i=0; i<=m; i++) {
    for (j=0; j<=n; j++) {
      if (i == 0 || j == 0){
        l[i][j] = 0;
      } else if (wordX[i-1] == wordY[j-1]) {
        l[i][j] = l[i-1][j-1] + 1;
        } else {
          a = l[i-1][j];
          b = l[i][j-1];
          l[i][j] = (a > b) ? a : b;
        }
      }
    }
    return l[m][n];
}

function printSolution(solution, l, wordX, wordY, m, n){

  var a = m, b = n, i, j,
  x = solution[a][b],
  answer = '';

  while (x !== '0') {
    if (solution[a][b] === 'diagonal') {
      answer = wordX[a - 1] + answer;
      a--;
      b--;
    } else if (solution[a][b] === 'left') {
      b--;
    } else if (solution[a][b] === 'top') {
      a--;
    }
    x = solution[a][b];
  }
  console.log('lcs: '+ answer);
}


function matrixChainOrder(p, n) {
  var i, j, k, l, q, m = [];

  for (i = 1; i <= n; i++){
    m[i] = [];
    m[i][i] = 0;
  }

  for (l=2; l<n; l++) {
    for (i=1; i<=n-l+1; i++) {
      j = i+l-1;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (k=i; k<=j-1; k++) {
        q = m[i][k] + m[k+1][j] + p[i-1]*p[k]*p[j];
        if (q < m[i][j]){
          m[i][j] = q;
          s[i][j]=k;
        }
      }
    }
  }
  printOptimalParenthesis(s, 1, n-1);
  return m[1][n-1];
}

var p = [10, 100, 5, 50, 1],
n = p.length;
console.log(matrixChainOrder(p, n));

var s=[];
for (i = 0; i <= n; i++){
  s[i] = [];
  for (j=0; j<=n; j++){
    s[i][j] = 0;
  }
}

function printOptimalParenthesis(s, i, j){
  if(i == j) {
    console.log("A[" + i + "]");
  } else {
    console.log("(");
    printOptimalParenthesis(s, i, s[i][j]);
    printOptimalParenthesis(s, s[i][j] + 1, j);
    console.log(")");
  }
} 

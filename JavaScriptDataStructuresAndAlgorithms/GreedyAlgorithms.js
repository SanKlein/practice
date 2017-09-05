function MinCoinChange(coins){
  var coins = coins;

  this.makeChange = function(amount) {
    var change = [],
    total = 0;
    for (var i=coins.length; i>=0; i--){
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change;
  };
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));


function knapSack(capacity, values, weights) {
  var n = values.length,
  load = 0, i = 0, val = 0;

  for (i=0; i<n && load < capacity; i++) {

    if (weights[i] <= (capacity-load)) {
      val += values[i];
      load += weights[i];
    } else {
      var r = (capacity-load)/weights[i];
      val += r * values[i];
      load += weights[i];
    }
  }
  return w;
}

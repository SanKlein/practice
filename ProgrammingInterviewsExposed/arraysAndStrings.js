function firstNonrepeatedCharacter(word) {
  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);
    if (word.indexOf(char) === word.lastIndexOf(char)) return char;
  }
}

function firstNonrepeatedCharacter2(word) {
  var found = {};
  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);
    if (found[char]) {
      found[char]++;
    } else {
      found[char] = 1;
    }
  }

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);
    if (found[char] == 1) return char;
  }
}

console.log(firstNonrepeatedCharacter('total'));
console.log(firstNonrepeatedCharacter2('teeter'));

function removeChars(word, chars) {
  word = word.split('');
  var remove = {};
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    remove[char] = 1;
  }

  for (var i = 0; i < word.length; i++) {
    if (remove[word[i]]) {
      delete word[i];
    }
  }

  var result = word.filter(letter => letter != undefined);
  return result.join('');
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords('Do or do not, there is no try.'));

function stringToInt(number) {
  var i = 0, num = 0, isNeg = false;
  var len = number.length;

  if (number.charAt(0) == '-') {
    isNeg = true;
    i = 1;
  }

  while (i < len) {
    num *= 10;
    num += (number.charAt(i++) - '0');
  }

  if (isNeg)
    num = -num;

  return num;
}

console.log(stringToInt('324'));
console.log(stringToInt('-324'));

function intToString(number) {
  var i = 0, isNeg = false, temp = [];

  if (number < 0) {
    number = -number;
    isNeg = true;
  }

  do {
    temp[i++] = (number % 10) + '0';
    number /= 10;
  } while (number != 0);

  var result = '';
  if (isNeg) result = '-';

  while (i > 0) {
    result += temp[--i];
  }

  return result;
}

console.log(intToString(324));
console.log(intToString(-324));

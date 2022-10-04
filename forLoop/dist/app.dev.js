"use strict";

var scores = [50, 20, 10, 9, 23, 52];

var getBigScore = function getBigScore(scores, threshold) {
  for (var index = 0; index < scores.length; index++) {
    if (scores[index] > threshold) {
      console.log(scores[index] + " is a big score");
    }
  }
};

var getFirstAndLastItems = function getFirstAndLastItems(toReverseArr) {
  var newArray = [];

  for (var index = toReverseArr.length - 1; index >= 0; index--) {
    console.log(index);
    newArray.push(toReverseArr[index]);
  }

  return newArray;
};

getBigScore(scores, 10);
getBigScore(scores, 20);
getBigScore(scores, 40);
getBigScore(scores, 50);
var arr = [1, 2, 3, 4, 5];
console.log(getFirstAndLastItems(arr));
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */


var arrayStringsAreEqual = function (word1, word2) {
    var sum1 = word1.reduce(function (x, y) {
        return x + y;
    }, 0);
    var sum2 = word2.reduce(function (x, y) {
        return x + y;
    }, 0);
    console.log(sum1, sum2);
    return (sum1 === sum2)
};
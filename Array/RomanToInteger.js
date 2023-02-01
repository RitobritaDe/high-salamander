/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var result = 0
    const length = s.length;
    for (i = 0; i < length; i++) {
        switch (s[i]) {
            case "I":
                if ((i < (length) - 1) && (s[i + 1] === "V")) {
                    result += 4
                    i += 1
                    // console.log(result,i,s[i])
                }
                else if ((i < length - 1) && (s[i + 1] === "X")) {
                    result += 9
                    i += 1
                    // console.log(result,i,s[i])
                }
                else {
                    result += 1
                    // console.log(result,i,s[i])
                }
                continue;
            case "V":
                result += 5
                // console.log(result,i,s[i])
                continue;
            case "X":
                if ((i < length - 1) && (s[i + 1] === "L")) {
                    result += 40
                    i += 1
                    console.log(result, i, s[i])
                }
                else if ((i < length - 1) && (s[i + 1] === "C")) {
                    result += 90
                    i += 1
                    console.log(result, i, s[i])
                }
                else {
                    result += 10
                    console.log(result, i, s[i])
                }
                continue;
            case "L":
                result += 50
                console.log(result, i, s[i])
                continue;
            case "C":
                if ((i < length - 1) && (s[i + 1] === "D")) {
                    result += 400
                    i += 1
                    console.log(result, i, s[i])
                }
                else if ((i < length - 1) && (s[i + 1] === "M")) {
                    result += 900
                    console.log(result, i, s[i])
                    i += 1
                    console.log(i, s[i])
                }
                else {
                    result += 100
                    console.log(result, i, s[i])
                }
                continue;
            case "D":
                result += 500
                console.log(result, i, s[i])
                continue;
            case "M":
                result += 1000
                console.log(result, i, s[i])
                continue;
        }
    }
    return result
};
console.log(romanToInt("III"))
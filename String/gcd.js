// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.



// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// PYTHON

// def gcd(a, b):
//     while b:
//         a, b = b, a % b
//     return a
// class Solution:
//     def gcdOfStrings(self, str1: str, str2: str) -> str:
//         if len(str1) < len(str2):
//             str1, str2 = str2, str1
//         if str1 + str2 != str2 + str1:
//             return ""
//         print(str1 + str2,str2 + str1)
//         g = gcd(len(str1), len(str2))
//         print(g)
//         return str1[:g]

function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function gcdOfStrings(str1, str2) {
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1];
    }
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let g = gcd(str1.length, str2.length);
    return str1.slice(0, g);
}

console.log(gcdOfStrings("ABCABC", "AB"))

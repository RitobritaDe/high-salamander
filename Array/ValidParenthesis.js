// Valid Parentheses


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Example 1:



// Input: s = "()"

// Output: valid



// Example 2:



// Input: s = "()[]{}"

// Output: valid



// Example 3:



// Input: s = "(]"

// Output: invalid



// Example 4:



// Input: s = "([)]"

// Output: invalid



// Example 5:



// Input: s = "{[]}"

// Output: valid

const valid = {
    "(": ")",
    "{": "}",
    "[": "]"
}
var isValid = function (s) {
    const x = s.split("");
    for (let i = 0; i < x.length; i += 2) {
        if (x[i + 1] != valid[x[i]])
            return false;
    }
    return true;
}

// let s = readline();
console.log(isValid("(]"));
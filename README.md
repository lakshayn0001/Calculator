const filtered=value.split(/([+\-*%])/)

regular expression (regex)

Example:

"a+b-c".split(/([+\-*%])/)
// Output: ["a", "+", "b", "-", "c"]


split() — for strings
Used on strings
Converts a string into an array
Uses a separator (string or regex)

"a+b-c".split(/([+\-*%])/)
// ["a", "+", "b", "-", "c"]

It does NOT modify the original string (strings are immutable anyway)

splice() — for arrays
Used on arrays
Adds, removes, or replaces elements
Works by index
Modifies the original array

let arr = ["a", "b", "c", "d"];

arr.splice(1, 2); 
// removes 2 elements starting from index 1

console.log(arr); 
// ["a", "d"]

It changes the original array

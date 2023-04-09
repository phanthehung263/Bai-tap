function findLongestStrings(arr) {
  const maxLength = arr.reduce((max, str) => Math.max(max, str.length), 0);
  return arr.filter(str => str.length === maxLength);
}

// Example usage
const inputArr = ["hello", "world", "foo", "bar", "baz", "quux"];
const longestStrings = findLongestStrings(inputArr);
console.log(longestStrings); // ["hello", "world"]

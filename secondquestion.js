function firstUniqChar(s) {
  const charCounts = new Map();
  
  // Count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  
  // Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCounts.get(char) === 1) {
      return i;
    }
  }
  
  return -1; // No non-repeating character found
}

// Test cases
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1

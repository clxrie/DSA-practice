var isPalindrome = function(s) {
  let left = 0;                
  let right = s.length - 1;   

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;  // mismatch = not a palindrome
    }

    left++;
    right--;
  }

  return true; 
};

function isAlphaNumeric(char) {
  const c = char.toLowerCase();
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}
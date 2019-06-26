function isPalindrom (str) {
  str = str.toLowerCase();
  return str == str.split('').reverse().join('');
}

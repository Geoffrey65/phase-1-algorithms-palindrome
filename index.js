function isPalindrome(word) {
  
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, ''); 
  const reversedWord = cleanWord.split('').reverse().join(''); 

  return cleanWord === reversedWord;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); 

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); }

module.exports = isPalindrome;

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    let alph = "abcdefghijklmnopqrstuvwxyz"

    let count = 0;

    let ans = ""

    if (alphabet === undefined ||alphabet.length !== 26)  return false;

    for (let q = 0; q < alphabet.length; q++) {

      for (let w = 0; w < alphabet.length; w++) {

        if (alphabet[q] === alphabet[w]) count += 1;

      }

    }

    if (count > 26) {
      return false
    }

    if (encode) {

    for (let i = 0; i < input.length; i++) {

      for (let j = 0; j < alph.length; j++) {

        if (input[i] === alph[j]) {

          ans = ans + alphabet[alph.indexOf(input[i])]

        }

      }

      if (input[i] === " ") {
        ans += input[i]
      }

     }

    }

    if (!encode) {

      for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < alphabet.length; j++) {
  
          if (input[i] === alphabet[j]) {
  
            ans = ans + alph[alphabet.indexOf(input[i])]
  
          }
  
        }
  
        if (input[i] === " ") {
          ans += input[i]
        }
  
       }


    }

    return ans;

  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

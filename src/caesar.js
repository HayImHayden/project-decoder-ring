// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    input = input.toLowerCase()
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    let result = ""
    let newIndex = 0

    if (shift === 0 || shift < -25 || shift > 25) {
        return false
    }
    
    for (what in input) {

        // in case if the input has space...
        if (alph.indexOf(input[what]) === -1) {
            result = result + input[what]; 
        }

        alph.find(letter =>{
            if(letter === input[what]){
                if (encode === true) {
                  newIndex = alph.indexOf(letter) + shift;
                } else if (encode === false) {
                  newIndex = alph.indexOf(letter) - shift;
                }

                if (newIndex > 25) {
                    newIndex = newIndex - 26;
                } else if (newIndex < 0) {
                    newIndex = newIndex + 26;
                }
                result = result + alph[newIndex]
            }
        })
    }
    
    return result
}

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;










/*
  function caesar(input, shift, encode = true) {
    // your solution code 
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let splitInput = input.split("");
    let result = [];
    let num = 26 - (shift)
    let negNum = 26 + (shift)
    let negCase = num - 26;

    //false case...
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    //if shift is neg...

    //if encode is ture then...

      if (shift < 0) {
        for (let i = 0; i < splitInput.length; i++) {
          for (let j = 0; j < alpha.length; j++) {
            if (splitInput[i] === alpha[j]) {
        if (alpha.indexOf(alpha[j]) - negCase < 0) {
          result.push(alpha[alpha.indexOf(alpha[j]) + negNum])
        } else {
          result.push(alpha[alpha.indexOf(alpha[j]) - negCase])
        }
        
      }
    }
  }
}

      if (shift > 0) {
      for (let i = 0; i < splitInput.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
          if (splitInput[i] === alpha[j]) {

            if ((alpha.indexOf(alpha[j]) + shift) > 25) {
              result.push(alpha[alpha.indexOf(alpha[j]) - num])
            } else {
              result.push(alpha[alpha.indexOf(alpha[j]) + shift])
            }
          }
        }
      }

    }

      return (result.join(""));

  }

*/

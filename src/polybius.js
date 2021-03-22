

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    input = input.toLowerCase();

    let iandj = ["i", "j"]

    let plyArr = [
      ["a", "f", "l", "q", "v"],
      ["b", "g", "m", "r", "w"],
      ["c", "h", "n", "s", "x"],
      ["d", iandj, "o", "t", "y"],
      ["e", "k", "p", "u", "z"]      
    ];

    let plyArrTwo = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", iandj, "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]      
    ];

    let plyArrThree = {
      11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
      12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
      13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
      14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
      15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
  };

    let ans = ""

    if (!encode) {

        for(numbers in input){

            let checkIfEven = input.split(" ")

            for(word in checkIfEven){
                if(checkIfEven[word].length%2 != 0){
                    return ans = false
                } 

            }

            if(input[0] === " "){
              ans += input[0]
                input = input.slice(1)
            }
            
            let ssang = `${input[0]}${input[1]}`

            for(values in plyArrThree){
                if (ssang === values){
                  ans += plyArrThree[values]
                }
            }
            input = input.slice(2)
        }


    //   for (let a = 0; a < input.length; a++) {

    //     if (typeof Number(input[a]) === "number") {

    //       for (let y = 0; y < input.length; y++) {

    //         decodeAns[a] = (input[a]);

    //         y++;

    //       }

    //       for (let b = 1; b < input.length; b++) {

    //         decodeAns[a] = (input[a]);

    //         b++;

    //       }

    //     } else if (typeof Number(input[a]) != "number") {

    //       decodeAns[a] = (input[a])

    //     }



    //     // if (typeof Number(input[a]) != "number") {

    //     //   decodeAns = decodeAns + input[a];
          
    //     //   for (let r = 0; r < decodeAns)

    //     // } else {



    //     // }


    //   }

    //   for (let u = 0; u < decodeAns.length; u++) {

    //     if (typeof Number(input[u]) === "number") {

    //     for (let ab = 0; ab < decodeAns.length; ab++) {

    //       outdeco[u] = decodeAns[ab]

    //     }

    //     for (let bc = 1; bc < decodeAns.length; bc++) {

    //       outdeco[u] = decodeAns[bc]

    //     }


    //   }

    // }

    //   console.log(outdeco);

      return ans;

    }

    for (let i = 0; i < input.length; i++) {

      // if (input[i].indexOf(input) === -1) {
      //   ans = ans + input[i]; 
      // }

      let found = false;

      for (let j = 0; j < plyArr.length; j++) {

        for (let w = 0; w < plyArr[j].length; w++) {

          if (plyArr[j][w] === input[i]) {
            found = true;
            ans = ans + String(plyArr.indexOf(plyArr[j]) + 1)
          }
        }
      }

      for (let j = 0; j < plyArrTwo.length; j++) {
        for (let w = 0; w < plyArrTwo[j].length; w++) {

          if (plyArrTwo[j][w] === input[i]) {
            ans = ans + String(plyArrTwo.indexOf(plyArrTwo[j]) + 1)
          }
        }
      }

      if (input[i] === "j" || input[i] === "i") {
        ans = ans + 42;
      } else if (!found) {
        ans = ans + input[i]
      }

    }

    return ans;

  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;



/*

    const alphabet = {
        11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
        12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
        13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
        14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
        15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
    }
    input = input.toLowerCase()
    let result = ""

    if(typeof input !== "string") return result = false

    if(encode){
        for(characters in input){
            const character = input[characters]
            if(character === " "){
                result += character
                continue
            }
            if(character === "i" || character === "j"){
                result += 42
                continue
            }
            for(letters in alphabet){
                if(character === alphabet[letters]) result += letters
            }
        }
    } else {
        for(numbers in input){
            let checkIfEven = input.split(" ")
            for(word in checkIfEven){
                if(checkIfEven[word].length%2 != 0){
                    return result = false
                } 
            }
            
            const pair = `${input[0]}${input[1]}`

            if(input[0] === " "){
                result += input[0]
                input = input.slice(1)
                continue
            }

            for(values in alphabet){
                if (pair === values){
                    result += alphabet[values]
                }
            }
            input = input.slice(2)
        }
    }
    return result
}
 */
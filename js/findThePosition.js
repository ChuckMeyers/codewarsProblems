// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// Solution

function position(letter){
    const chars = 'abcdefghijklmnopqrstuvwxyz'
   return `Position of alphabet: ${chars.indexOf(letter) + 1}`
    }
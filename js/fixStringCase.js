// You will be given a string that may have mixed uppercase and lowercase letters.
// Your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// Solution

function solve(s){
    let upper = []
    let lower = []
    let split = s.split('').map(char => char === char.toUpperCase())
    for(let i = 0; i < split.length; i++){
        if(split[i] === true){
            upper.push(split[i]);
        }else if(split[i] === false){
            lower.push(split[i]);
        }
    }
    if(upper.length <= lower.length){
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    } 
}
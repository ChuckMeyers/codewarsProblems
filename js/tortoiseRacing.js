// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. 
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. 
// How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) 
// and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds 
// (round down to the nearest second) or a string in some languages.

// Solution

function race(v1, v2, g) {
    const equation = g / (v2 - v1);
    const hours = Math.floor(equation);
    const minutes = Math.floor((equation*60) % 60);
    const seconds = Math.floor((equation*3600) % 60);
    if(v2 > v1) {
        return [hours, minutes, seconds];
    } else {
        return null
    }
  }

  console.log(race(80, 100, 40));
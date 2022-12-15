// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Solution

function remove(s,n){
    while(n) {
      s = s.replace("!", "");
      n--;
    }
    return s;
  }
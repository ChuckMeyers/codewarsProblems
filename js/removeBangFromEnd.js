// Remove an exclamation mark from the end of a string.

// Solution

const remove = string => string.endsWith('!') ? string.slice(0,-1) : string;
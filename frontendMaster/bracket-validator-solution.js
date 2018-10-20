// Write a function, is valid that checks if brackets in a string are balanced (properly closed) based on JavaScript syntax rules.
// valid examples: '{([()])}()' or '()[]'
// invalid examples: '(' or '[(])'

/*
* Checks for balanced brackets in a string of code.
* @param {string} code - a string of code.
* @return {boolean} - true if valid, otherwise false
*/
function isBalanced(code) {

    const bracketMatch = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    const leftBracket = new Set(['(', '[', '{']);
    const rightBracket = new Set([')', ']', '}']);
  
    const leftBracketStack = [];
  
    for (let i = 0; i < code.length; i++) {
      let char = code.charAt(i);
  
      if (leftBracket.has(char)) {
        leftBracketStack.push(char);
      } else if (rightBracket.has(char)) {
        if (!leftBracketStack.length) {
          return false;
        } else {
          const lastUnclosedLeft = leftBracketStack.pop();
  
          if (bracketMatch[lastUnclosedLeft] !== char) {
            return false;
          }
        }
      }
    }
    return leftBracketStack.length === 0;
  }
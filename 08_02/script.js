/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression:
const moreMath = function (a, b) {
  let c = a * b;
  return c;
};

console.log("Do some math: ", doSomeMath(5, 6));
console.log("Do some more math: ", moreMath(5, 6));

const weirdMath = function (a, b) {
  let c = a * b;
  return c;
};

console.log("Weird math: ", weirdMath(doSomeMath(5, 6), moreMath(5, 6)));

// Immediately invokved function expression:
(function () {
  let a = 5;
  let b = 7;
  let c = doSomeMath(a, b);
  console.log(`Immediately: ${c}`);
})();

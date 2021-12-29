/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method", this.volume);
    this.volume = volume;
    console.log("this.volume after update", volume);
    (function () {
      console.log("this.volume in nexted function: ", this.volume); //will be 20 since function declaration is hoisted to global scope
    })();
    (() => {
      console.log("arrow function volume: ", this.volume); //arrow function is now globally scoped, will find nearest this
    })();
  },
};

console.log(greenPack.newVolume(5));

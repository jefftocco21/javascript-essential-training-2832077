/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents.join(", ")); //joining elements of array into a comma separated string

backpackContents.push("bottle"); //adding items to end of array
backpackContents.unshift("pencil"); //adding items to front of array
backpackContents.shift(); //remove first item
backpackContents.pop(); //remove last item
console.log(backpackContents);

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

console.log(backpackContents);

let longItems = backpackContents.find(function (item) {
  if (item.length >= 6) {
    return item;
  }
});
console.log("longItems:", longItems);
console.log(backpackContents);

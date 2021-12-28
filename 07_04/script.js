/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange"
];

console.log(colors);

console.log(colors.pop()); //show the item being popped

console.log(colors); //show array - last item

colors.unshift(colors.pop()); //pop last item, make it first

console.log(colors);

colors.sort(); //sort alphabetically

console.log(colors);

const foundItem = colors.find(item => item === "green"); //find a specific item
console.log(foundItem); //print found item

colors.splice(colors.indexOf(foundItem), 1);

console.log(colors);




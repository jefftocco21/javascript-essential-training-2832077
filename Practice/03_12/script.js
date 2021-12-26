/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Coat from "./Coat.js"
import Backpack from "./Backpack.js"

const leathercoat = new Coat(
    "5",
    "true",
    "false",
    "black"
);

const everyday = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
);

console.log(leathercoat);
console.log(everyday);


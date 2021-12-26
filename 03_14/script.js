/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const book1 = new Book(
  200,
  "My First",
  "Fantasty",
  false
)

const book2 = new Book(
  300,
  "My Second",
  "Comedy",
  true
)

const book3 = new Book(
  400,
  "My Fourth",
  "Thriller",
  true
)

console.log(everydayPack)
console.log(book1, book1.closeCover(true));


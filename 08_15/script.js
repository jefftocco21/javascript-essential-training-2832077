/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
const stuffList = document.createElement("ul");

const liList = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

liList.forEach((item) => {
  stuffList.append(item);
});

article.append(stuffList);

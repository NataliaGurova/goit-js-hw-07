
const categories = document.querySelector("#categories");
console.log("Number of categories: ",  categories.children.length);

const liElems = document.querySelectorAll(".item");
liElems.forEach((elem) => {
  const h2 = elem.children[0];
  const count = elem.children[1].children;
  console.log("Category: ", h2.textContent);
  console.log("Elements: ", count.length);
});


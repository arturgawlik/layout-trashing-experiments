const elementsToRender = Array.from({ length: 100 }).map(
  (v, i) =>
    `${i}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur sed alias est. Tempore eaque placeat omnis, culpa numquam, deserunt odio inventore quaerat possimus ab quam beatae velit, dolorum aliquam!`
);
const root = document.getElementById("root");

for (const elem of elementsToRender) {
  const newElem = document.createElement("div");
  newElem.textContent = elem;
  newElem.classList.add("bg-bisque");

  root.appendChild(newElem);

  // this also triggers Style Recalculations - because it can affect Layout
  console.log(root.clientHeight);
}

setTimeout(() => {
  const elem = document.querySelector("#root div");
  elem.classList.remove("bg-bisque");
  elem.classList.add("bg-red");
  console.log(root.clientHeight);
}, 5000);

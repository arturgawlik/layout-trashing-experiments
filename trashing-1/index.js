const elementsToRender = Array.from({ length: 100 }).map(
  (v, i) =>
    `${i}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur sed alias est. Tempore eaque placeat omnis, culpa numquam, deserunt odio inventore quaerat possimus ab quam beatae velit, dolorum aliquam!`
);
const root = document.getElementById("root");

for (const elem of elementsToRender) {
  const newElem = document.createElement("div");
  newElem.textContent = elem;

  root.appendChild(newElem);

  // this line is causing forced synchronus layout - in result there is one layout for each element to render, which is very porly performing
  console.log(root.clientHeight);
}

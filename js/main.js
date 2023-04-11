let hexcolor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let colorparts = [];
for (let index = 0; index < 6; index++) {
  colorparts.push(hexcolor[Math.floor(Math.random() * hexcolor.length)]);
}
let finalcolor = `#${colorparts.join("")}`;

setInterval(() => {
  
  document.body.style.backgroundColor = finalcolor;

}, 1000);

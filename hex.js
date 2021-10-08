const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const name = document.getElementById("name");
btn.addEventListener("click", function () {
  let hexColor = "#";
  
  //console.log(hexColor);
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  console.log("hello"+getRandomNumber())
  console.log(hexColor)
  //console.log(hexColor);

  color.textContent = hexColor;
  name.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  console.log(Math.floor(Math.random() * hex.length))
  return Math.floor(Math.random() * hex.length);
}
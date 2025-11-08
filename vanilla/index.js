console.log("Javascript loaded")

let count = 0;
const button = document.getElementById("click");
const countSpan = document.getElementById("count");

button.addEventListener("click", function() {
  count = count + 1;
  countSpan.textContent = count;
})
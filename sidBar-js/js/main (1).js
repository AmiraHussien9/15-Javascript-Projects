

let bars = document.querySelector(".bars");
let hiddenSide = document.querySelector(".hidden-side")
let links = document.querySelector(".links");
let closed = document.querySelector(".closed")
console.log(bars , links );


bars.addEventListener("click" , function() {
  hiddenSide.classList.toggle("side")
})

closed.addEventListener("click" , function() {
  hiddenSide.classList.toggle("side")
})
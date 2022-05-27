

let bars = document.querySelector(".bars");
let links = document.querySelector(".links")
console.log(bars , links);

bars.addEventListener("click" , function () {
  console.log(links.classList)
  links.classList.toggle("show-links")
})
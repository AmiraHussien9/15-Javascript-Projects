let btn = document.querySelector(".btn");
let overLay = document.querySelector(".overLay");
let closed = document.querySelector(".closed");



console.log(btn , overLay)


btn.addEventListener("click" , function() {
  overLay.style.display = "flex"
})


closed.addEventListener("click" , function() {
  overLay.style.display = "none"
})
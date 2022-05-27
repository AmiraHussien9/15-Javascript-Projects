let menuBtn =document.querySelector(".menuBtn");
let linksContainer = document.querySelector(".links-container")
console.log(linksContainer)

menuBtn.addEventListener("click" , function() {
   linksContainer.classList.toggle("show")
    
})
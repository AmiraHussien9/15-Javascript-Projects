let links = document.querySelectorAll("li");
let images = Array.from(document.querySelectorAll("img"))
console.log(links , images)




for(let i=0 ; i <links.length ; i++) {


    links[i].addEventListener("click" , function(e) {

      images.map((image)=> {
        image.parentElement.parentElement.style.display = "block"
      })
      let filteredImages = images.filter((image) => image.classList.contains(e.target.innerText) != true);
      console.log(filteredImages);
      
      filteredImages.map((image) => {
        image.parentElement.parentElement.style.display = "none"
      })
    })
}
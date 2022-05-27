let button = document.querySelector("button") ; 

let video = document.querySelector("video");

console.log(button , video)


button.addEventListener("click" , function(e) {
   if(!button.classList.contains("slide")){
     button.classList.add("slide");
     video.play()
   } else{
     button.classList.remove("slide");
     video.pause()
   }

})

// console.log(button.children[0].classList.contains("pause"))

//loading

// requires jquery

jQuery(document).ready(function($) {  


    $('#preloader').fadeOut(3000,function(){$(this).remove();});
 
  
  });
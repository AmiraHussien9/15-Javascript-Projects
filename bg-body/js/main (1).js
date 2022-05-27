//with simple color

// let btn = document.querySelector(".btn");
// let color = document.getElementById("color");
// let colors = ["red" , "yellow" , "green" , "black"]
// console.log(color)

// btn.addEventListener("click" , function() {
//     let randomNumber = getColor()
//   document.body.style.backgroundColor=colors[randomNumber];
//   color.textContent =colors[randomNumber];

  
// })


// function getColor() {

// return Math.floor(Math.random() *colors.length)

// }




//with hexa color

let btn = document.querySelector(".btn");
let color = document.getElementById("color")
let hex = [0 , 1, 2, 3, 4,5 ,6 ,7 ,8 ,9 ,"A" ,"B","C" ,"D","F"];



btn.addEventListener("click" , function() {
   
let hexaColor = "#" ;
  for(let i = 0 ; i < 6 ; i++) {
        hexaColor += hex[ getColor() ]
  }

    color.textContent = hexaColor
    document.body.style.backgroundColor = hexaColor;
})


function getColor() {
 return Math.floor(Math.random()*hex.length)
}
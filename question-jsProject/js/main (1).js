let btns = document.querySelectorAll("button");
let questionText = document.querySelectorAll(".question-text")

console.log(btns)

for(let i=0 ; i<btns.length ; i++) {
    btns[i].addEventListener("click" ,function(e) {
      let question =  e.target.parentElement.parentElement.parentElement.parentElement.children[1];

      question.classList.toggle("show-text")
   
    })
}
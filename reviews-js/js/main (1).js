

let reviews = [
  {
    img : "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    theName:"Johnson Smith",
    job:"Web Developer",
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nesciunt est aspernatur voluptate modi corporis ipsum iusto veritatis`,
},
  
  
  {
    img : "https://upload.wikimedia.org/wikipedia/commons/2/23/Photo_portrait_PP.jpg",
    theName:"Murphy Taylor",
    job:"Front-End Developer",
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nesciunt est aspernatur voluptate modi corporis ipsum iusto veritatis`,
},

{
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
  theName:"Williams O'Brien",
  job:"Back-End Developer",
  content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Nesciunt est aspernatur voluptate modi corporis ipsum iusto veritatis`, 
} , 
{
  img : "https://www.publicdomainpictures.net/pictures/330000/nahled/headshot.jpg",
  theName:"Byrne 	Wilson",
  job:"Full-Stack Developer",
  content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Nesciunt est aspernatur voluptate modi corporis ipsum iusto veritatis`, 
} , 
{
  img : "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/102653/s960_Minister_Donelan.jpeg",
  theName:"Martin Gagnon",
  job:"Software Application Developer",
  content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Nesciunt est aspernatur voluptate modi corporis ipsum iusto veritatis`
} ,

{
  img : "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
  theName:"Lee Morton",
  job:"Database Administrator",
  content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Nesciunt est aspernatur voluptate modi corporis ipsum iusto veritatis`
}];



let personImage = document.getElementById("image");
let personName = document.querySelector(".name");
let job = document.querySelector(".job");
let content = document.querySelector(".image-content");


let next = document.getElementById("next");
let prev = document.getElementById("prev");
let random = document.getElementById("random");





function getPerson(person) {
  let items = reviews[person]
personImage.src = items.img;
personName.innerHTML =items.theName;
job.innerHTML = items.job ;
content.innerHTML = items.content;

}

let index = 0;


// neext button
next.addEventListener("click" , function() {
  index++
 
  if(index == reviews.length) {
    index = 0 ;
  }
  getPerson(index)
})



//previous button
prev.addEventListener("click" , function() {

 if(index == 0) {
   index = reviews.length
 }
 index--; 
  getPerson(index)
})



//random button
random.addEventListener("click" , function() {
    let index =Math.floor(Math.random()* reviews.length);
    getPerson(index);
}) 
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
var slideIndex = 1;
showSlides(slideIndex);
next.addEventListener('click',()=>{
    plusSlides(1);
})
prev.addEventListener('click',()=>{
    plusSlides(-1);
})
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
} 
/* const slideshow_container=document.querySelector(".slideshow-container")
const tabImage=[
    {
        src:'img/chat.jpg'
    },
    {
        src:'img/chaton.JPG'
    },
    {
        src:'img/chat.jpg'
    }
]
tabImage.forEach((element)=>{
    create_img(element.src);
    })
 function create_img(src){
    const mySlides_fade=document.createElement('div');
    mySlides_fade.setAttribute("class","mySlides fade")
    const image = document.createElement('img')
    image.setAttribute('src',src)
    image.style.width='100%'
    slideshow_container.append(mySlides_fade,image) 
} */
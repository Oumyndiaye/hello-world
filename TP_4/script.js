const slideshow_container=document.querySelector(".slideshow-container")
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
}
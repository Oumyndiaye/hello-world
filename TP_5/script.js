const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    fetch(APIURL)
    .then(res =>{
        return res.json()
    }  )
    .then(data =>{
      data.results.forEach(element=>{
        let path = IMGPATH + element.poster_path;
        comment(path,element.original_title,element.vote_average,element.overview)
    })   
}) 
    function comment(src,title,num,para){
    const apiComment =document.querySelector('.apiComment')
    const divImg=document.createElement('img')
    const img =document.createElement('div')
    img.appendChild(divImg);
    img.setAttribute('class',"img")
    divImg.setAttribute('src',src)
    const divContent= document.createElement('div');
    const divContentTitle=document.createElement('div')
     const divTitle=document.createElement('span');
     divTitle.setAttribute('class',"title");
     divTitle.innerText=title;
     const divNumTitle=document.createElement('span');
     divNumTitle.innerText=num;
     divNumTitle.setAttribute('class',"num")
     divContentTitle.append(divTitle,divNumTitle)
     divContentTitle.setAttribute('class','span')
      const divOverview=document.createElement('div')
     const paraOverview=document.createElement('p')
     divOverview.appendChild(paraOverview)
     divOverview.setAttribute('class','divOverview')
     paraOverview.setAttribute('class',"para");
     divOverview.innerText=para; 
     divContent.append(img,divContentTitle,divOverview)
    divContent.setAttribute('class','divContent')
    apiComment.append(divContent)
 }
var mySearchField= document.getElementById('mySearchField')
mySearchField.addEventListener('input',()=>{
    let valeur = mySearchField.value
    fetch(SEARCHAPI+valeur)
    .then(res =>{
        return res.json()
    })
    .then(data =>{  
      data.results.forEach(element=>{
        let path = IMGPATH + element.poster_path;
        comment(path,element.original_title,element.vote_average,element.overview)
        })   
    })
})

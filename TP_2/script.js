const container = document.querySelector(".div_container");
const toogle = document.querySelector('i')
const ul =document.getElementById('lu');
const titi=document.getElementById('titi')
let i=1;
toogle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});
/* window.addEventListener('mouseover',e=>e.target==container ? document.body.classList.toggle('dark'):false
) */

const classes = [
  {
    icone1: 'nav-icon fas fa-tachometer-alt',
    paragraphe1: 'Dashboard',
    paragraphe2: '',
    colorCont:'',
    icone2: 'fa-solid fa-chevron-left',
    booleen:'true',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Dashboard v1',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Dashboard v2',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Dashboard v3',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-th',
    paragraphe1: 'Widget',
    paragraphe2: 'New',
    colorCont:'red',
    icone2: '',
    booleen:'false',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:'',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-copy',
    paragraphe1: 'Layout Options',
    paragraphe2: '6',
    colorCont:'blue',
    icone2: 'fa-solid fa-chevron-left',
    booleen:'true',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Top Navigation',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
      },
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Top Navigation + sidebar',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-chart-pie',
    paragraphe1: 'Charts',
    paragraphe2: '',
    icone2: 'fa-solid fa-chevron-left',
    colorCont:'',
    booleen:'true',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'ChartJS',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
         icone1:'far fa-circle nav-icon',
        paragraphe1:'Flot',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
         icone1:'far fa-circle nav-icon',
        paragraphe1:'Inline',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
         icone1:'far fa-circle nav-icon',
        paragraphe1:'Uplot',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
    ]  
  },
  {
    icone1: 'nav-icon fas fa-tree',
    paragraphe1: 'UI Elements',
    paragraphe2: '',
    colorCont:'',
    icone2: '',
    booleen:'true',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'General',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Icons',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-edit',
    paragraphe1: 'Forms',
    paragraphe2: '',
    colorCont:'',
    icone2: '',
    booleen:'true',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'General Elements',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Advanced Elements',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-table',
    paragraphe1: 'Tables',
    paragraphe2: '',
    colorCont:'',
    icone2: '',
    booleen:'true',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Simple table',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      },
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'Data table',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
      }
    ]
  },
  {
    icone1: '',
    paragraphe1: 'Exemples',
    paragraphe2: '',
    colorCont:'',  
    icone2: '',
    booleen:'false',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:'',
        paragraphe2:'',
        colorCont:'',
        icone2:'',
        booleen:''
       }
      ]
  },
];
 classes.forEach(element => {
  newCard(element.icone1,element.paragraphe1,element.paragraphe2,element.colorCont,element.icone2,element.booleen)
  element.sous_Menu.forEach(el => {  
    newCard(el.icone1,el.paragraphe1,el.paragraphe2,el.colorCont,el.icone2,el.booleen) 
  });         
});  
  function newCard(type,content,cont,colorCont,map,booleen){
      const lili = document.createElement('li')
      const i = document.createElement('i');
      const p =document.createElement('p');
      ul.appendChild(lili);
      lili.appendChild(i)
      lili.appendChild(p); 
      lili.setAttribute('class','list') 
      i.setAttribute('class',type)
      p.innerHTML=content
      p.setAttribute('class','text menu-text')
      const p1=document.createElement('span'); 
      lili.appendChild(p1);
      p1.innerHTML=cont ;  
       p1.setAttribute('class',colorCont);
       if(booleen==='true'){
        let i1=document.createElement('i')
        i1.setAttribute('class',map) 
        lili.appendChild(i1); 
        lili.id='id_sm';
        lili.addEventListener('click', function () {
          const sousMenu=document.querySelectorAll('.list')
          console.log(sousMenu)
           i1.addEventListener('click',()=>{
            document.body.classList.toggle('list')
        }) 
        })
       //console.log(lili.innerText);
}

        
         
      }
   


      
       
  
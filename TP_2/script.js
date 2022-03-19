const container = document.querySelector(".div_container");
const toogle = document.querySelector('i')
const ul =document.getElementById('lu');
const titi=document.getElementById('titi')
const classes = [
  {
    icone1: 'nav-icon fas fa-tachometer-alt',
    paragraphe1: 'Dashboard',
    paragraphe2: '',
    icone2: 'fa-solid fa-chevron-left',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-th',
    paragraphe1: 'Widget',
    paragraphe2: 'New',
    icone2: '',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-copy',
    paragraphe1: 'Layout Options',
    paragraphe2: '6',
    icone2: 'fa-solid fa-chevron-left',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-chart-pie',
    paragraphe1: 'Charts',
    paragraphe2: '',
    icone2: 'fa-solid fa-chevron-left',
    sous_Menu:[
      {
        icone1: 'far fa-circle nav-icon',
        paragraphe1:'ChartJS'
      },
      {
         icone1:'far fa-circle nav-icon',
        paragraphe1:'Flot'
      },
      {
         icone1:'far fa-circle nav-icon',
        paragraphe1:'Inline'
      },
      {
         icone1:'far fa-circle nav-icon',
        paragraphe1:'Uplot'
      },
    ]  
  },
  {
    icone1: 'nav-icon fas fa-tree',
    paragraphe1: 'UI Elements',
    paragraphe2: '',
    icone2: '',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-edit',
    paragraphe1: 'Forms',
    paragraphe2: '',
    icone2: '',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
      }
    ]
  },
  {
    icone1: 'nav-icon fas fa-table',
    paragraphe1: 'Tables',
    paragraphe2: '',
    icone2: '',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
      }
    ]
  },
  {
    icone1: '',
    paragraphe1: 'Exemples',
    paragraphe2: '',
    icone2: '',
    sous_Menu:[
      {
        icone1: '',
        paragraphe1:''
       }
      ]
  },
  
];
  classes.forEach(element => {
    newCard(element.icone1,element.paragraphe1,element.paragraphe2,element.icone2)
    element.sous_Menu.forEach(el => {      
           sousMenu(el.icone1,el.paragraphe1) 
    }); 
  });
  function newCard(type,content,cont,map) {
      const lili = document.createElement('li')
      const i = document.createElement('i');
      const p =document.createElement('p');
      ul.appendChild(lili);
      lili.appendChild(i)
      lili.appendChild(p);
      i.setAttribute('class',`${type}`)
      const i1=document.createElement('i')
      i1.setAttribute('class',`${map}`)
      p.innerHTML=`${content}`
      const p1=document.createElement('p'); 
      lili.appendChild(p1);
      lili.appendChild(i1);
      p1.innerHTML=`${cont}` ;
   }
  /* toogle.addEventListener('click',()=>{  
  body.classeList('dark')
  }) */
  function sousMenu(type,content){
    const lili = document.createElement('li')
    const i = document.createElement('i');
    const p =document.createElement('p');
    ul.appendChild(lili);
    lili.appendChild(i)
    lili.appendChild(p);
    i.setAttribute('class',`${type}`)
    p.innerHTML=`${content}`
  }
  
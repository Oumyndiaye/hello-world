 const btn=document.querySelectorAll('button');
 const mon_projet =document.getElementById("mon_projet");
 let i=1;
  btn.forEach( (button,i)=>{
    button.addEventListener('click',()=>{
     const btn_generate=document.createElement('div');
     btn_generate.className=button.className;
     btn_generate.innerText=button.innerText+''+(i++);
     mon_projet.appendChild(btn_generate);
     setTimeout(()=>{
         mon_projet.removeChild(btn_generate);
     },1000);
            })
    });
 
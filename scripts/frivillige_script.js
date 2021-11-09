

function visBilde(e){//kalles opp som onchange event på filopplastnings input. legger inn bildet i dokumentet

console.log('viser bilde!');
let fil = e.target.files//henter ut fra input.
let image=document.createElement('img')//oppretter bildeelement
image.src =URL.createObjectURL(fil[0])//oppretter en url og setter den til egenskapen src på bildet.
image.className='opplastetBilde';
let innSti = document.getElementById('bildeDiv')
innSti.innerHTML='';//tømmer bilde diven før den legger inn( dersom bruker skulle bytte ut opplastet bilde)
innSti.appendChild(image);//legger bildet inn i html dokumentet




}



function formValid(event){// fyres av ved submit, og lagrer verdier fra input.
    
    event.preventDefault();//stopper siden fra å refreshe ved sub,it
    let bolig = document.getElementById('inputAdr').value ;
    let navn = document.getElementById('inputNavn').value;
    let inn = document.getElementById('formWrap');
    inn.innerHTML=''// fjerner formet
    
    
    
    
   
    let b =  'boligen din ' +bolig+' er nå lagt ut til utlån.'// streng til textnoden melding
    let melding = document.createTextNode(b);
    let overText = document.createTextNode('Takk for ditt bidrag, '+navn+'!')//skriver ut overskrift på tilbakemelding
    let overskrift = document.createElement('h2');
    overskrift.appendChild(overText);
    let para = document.createElement('p');
    let knapp = document.createElement('button');//knapp som tar deg til hjemsiden
    knapp.className ='btn';
    knapp.innerHTML='Hjem';
    knapp.setAttribute('id','knapp');
    knapp.addEventListener('mouseover',hoverIn);// for farge endring ved hover
    knapp.addEventListener('mouseout',hoverUt);
    knapp.addEventListener('click',klikkHjem);// event listener klikk på knappen

    para.appendChild(melding)
    inn.appendChild(overskrift);
    inn.appendChild(para)
    inn.appendChild(knapp);// setter in i dokumentet
    

    
      


}
function hoverIn(){//ender knapp til mørk ved hover

   let btn = document.getElementById('knapp');
   btn.style.backgroundColor='#d3d3d3';
}
function hoverUt(){//setter fargen tilbake til default(hvit)

    let btn = document.getElementById('knapp');
    btn.style.backgroundColor='white';
 }

 function klikkHjem(){// sender bruker til hjemsiden ved trykk på knappen

    window.location.replace('../documents/p3.html');
 }


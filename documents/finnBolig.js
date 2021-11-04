


//----------funksjonsdeklareringer-----------

function attributesToList(a) {//tar egenskapene til bolig objektene og returner de som en 2dListe
    let list = [];
    for (let i = 0; i < a.length; i++) {
      list[i] = new Array();
  
      for (let propr of Object.values(a[i])) {
        list[i].push(propr);
      }
    }
  
    return list;
  }
  
  function listSort(a) {//endrer rekkefølgen på listen og setter bildetstien som første index
    for (j = 0; j < a.length; j++) {
      let ImgPath = a[j][2];
  
      a[j].splice(2, 1);
      a[j].unshift(ImgPath);
  
      console.log(a[j]);
    }
  
    return a;
  }
  
  function listToHTML(a) {//lager en liste: displaylist med html elementene som skal legges inn i documentet
    let displayList = [];
    const proprList = ["By", "Soverom", "Bad", "Sengeplasser", "Kvm"];
  
    for (var j = 0; j < a.length; j++) {
      displayList[j] = new Array();
  
      let pic = document.createElement("img");
      pic.src = a[j][0];
      pic.setAttribute("class", "husBilder");
      displayList[j].push(pic);
  
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("class", "checkBoxClass");
      checkBox.setAttribute("id", "cb" + String(j));
      cbArray.push(checkBox);
  
      let ul = document.createElement("ul");
      ul.setAttribute("class", "listClass");
      let adrHeader = document.createElement("h3");
      let headNode = document.createTextNode(String(a[j][1]));
      adrHeader.appendChild(headNode);
      adrHeader.setAttribute("class", "addHeader");
  
      ul.appendChild(adrHeader);
  
      for (let i = 2; i < a[j].length; i++) {
        textNode = document.createTextNode(
          proprList[i - 2] + ": " + String(a[j][i])
        );
        punkt = document.createElement("li");
        punkt.setAttribute("class", "listItemClass");
        punkt.appendChild(textNode);
        ul.appendChild(punkt);
      }
  
      displayList[j].push(ul);
      displayList[j].push(checkBox);
    }
    console.log(displayList);
    return displayList;
  }
  
  function listToDoc(displayList, datasett) {//funksjonen setter inn html elementene fra displaylist inn i selve siden
    let innSti = document.getElementById("contentWrapper");
    console.log(displayList);
    for (let i = 0; i < datasett.length; i++) {
      let newDiv = document.createElement("div");
  
      for (let j = 0; j < displayList[i].length; j++) {
        newDiv.appendChild(displayList[i][j]);
      }
      newDiv.setAttribute("class", "content");
  
      innSti.appendChild(newDiv);
    }
  
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    let btnTxt = document.createTextNode("Send inn:");
    btn.appendChild(btnTxt);
    btn.onmouseover = function () {
      btn.style.backgroundColor = "#D3D3D3";
    };
    btn.onmouseout = function () {
      btn.style.backgroundColor = "white";
    };
    btn.addEventListener("click", btnKlikk1);
    
    innSti.appendChild(btn);
  }
  
  function createContent(a) {//'sjef' funksjon som styrer kallene av funksjonene, tar inn den ubehandlede listen
                             //og kaller funksjonene som trengs for å gå rett fra en liste objekter (as), til å ha de ferdig presentert på listen.
      clearInnhold();
    let b = attributesToList(a);
    let c = listSort(b);
    let d = listToHTML(c);
  
    let e = listToDoc(d, a);
    
  }
  
  
  
  function btnKlikk1() {//funksjonen gir tilbakemelding om hvilke boliger som er søkt, eventuelt om ingen er søkt
                        // gjøres ved å se etter om brukeren har krysset av på noen av checkboxene
    var sokteBoliger = [];
  
    for (var i = 0; i < cbArray.length; i++) {
      if (cbArray[i].checked) {
        sokteBoliger.push(boliger[i].adr);
      }
    }
    if (sokteBoliger.length == 0) {
      alert("Du har ikke valgt noen bolig å søke!");
    } else {
      str = "Du har søkt følgende bosteder:";
      for (var i = 0; i < sokteBoliger.length; i++) {
        str += "\n" + sokteBoliger[i] + "";
      }
      alert(str);
    }
  }
  
  function clearInnhold(){//funksjonen tømmer diven med boliger, før det legges inn, slik at filtereringen fungerer
      document.getElementById('contentWrapper').innerHTML='';
  
  
  
  
  }
  
  //--------Slutt på funksjonsdeklarereringer--------------
  
  //------------------programstart-------------
  
  //objekter for testing **Denne delen skal byttes ut av den 'fake' databasen laget av matias
  
  b = {
    adr: "kjøiaveien 59",
    by: "Oslo",
    bildeSti: "../placeholder.png",
    soverom: 4,
    bad: 2,
    sengeplasser: 5,
    kvm: 120,
  };
  
  c = {
    adr: "Nedre alle 5",
    by: "Trondheim",
    bildeSti: "../placeholder.png",
    soverom: 4,
    bad: 2,
    sengeplasser: 5,
    kvm: 120,
  };
  
  d = {
    adr: "Perlevej 8",
    by: "Skagen",
    bildeSti: "../placeholder.png",
    soverom: 4,
    bad: 2,
    sengeplasser: 5,
    kvm: 120,
  };
  
  e = {
    adr: "Kongensgate",
    by: "oslo",
    bildeSti: "../placeholder.png",
    soverom: 5,
    bad: 2,
    sengeplasser: 6,
    kvm: 100,
  };
  
  f = {
    adr: "Kongensgate",
    by: "oslo",
    bildeSti: "../placeholder.png",
    soverom: 5,
    bad: 2,
    sengeplasser: 6,
    kvm: 100,
  };
  
  boliger = [b, c, d, e, f];//testarray med boligobjekter
  cbArray = [];//array som inneholder alle checkBoxene
  
  createContent(boliger);// selve funksjonskallet av testarrayen
  
  
  
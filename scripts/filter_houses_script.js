// 1-2 leilghet
// 2-4 rekkehus
// 4-> hus

// Her deklarer vi bolig "databasen" med alle husene som skal vises. 
cbArray=[];
boliger = [
    
    {
        by: "Oslo",
        img: "h6.jpg",
        adresse: "Håkons gate 24",
        antall_personer: "5",
        bad: "3",
        kvm: "150kvm",
        bolig_type: "hus"
    },
    {
        by: "Oslo",
        img: "r6.jpg",
        adresse: "Sanders gate 76",
        antall_personer: "3",
        bad: "2",
        kvm: "110kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Oslo",
        img: "l6.jpg",
        adresse: "General ruges vei 214",
        antall_personer: "2",
        bad: "1",
        kvm: "72kvm",
        bolig_type: "leilighet"
    },
    {
        by: "Trondheim",
        img: "h5.jpg",
        adresse: "Matias gate 98",
        antall_personer: "4",
        bad: "2",
        kvm: "127kvm",
        bolig_type: "hus"
    },
    {
        by: "Trondheim",
        img: "r5.jpg",
        adresse: "Jespers gate 12",
        antall_personer: "2",
        bad: "1",
        kvm: "92kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Trondheim",
        img: "l5.jpg",
        adresse: "Hansens gate 22",
        antall_personer: "2",
        bad: "1",
        kvm: "72kvm",
        bolig_type: "leilighet"
    },
    {
        by: "Kristiansand",
        img: "h4.jpg",
        adresse: "Fredriks gate 81",
        antall_personer: "6",
        bad: "3",
        kvm: "162kvm",
        bolig_type: "hus"
    },
    {
        by: "Kristiansand",
        img: "r4.jpg",
        adresse: "Markus gate 92",
        antall_personer: "2",
        bad: "2",
        kvm: "93kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Kristiansand",
        img: "l4.jpg",
        adresse: "Bilals gate 77",
        antall_personer: "1",
        bad: "1",
        kvm: "45kvm",
        bolig_type: "leilighet"
    },
    {
        by: "Bergen",
        img: "h3.jpg",
        adresse: "Olavs gate 13",
        antall_personer: "5",
        bad: "3",
        kvm: "122kvm",
        bolig_type: "hus"
    },
    {
        by: "Bergen",
        img: "r3.jpg",
        adresse: "Hakeems gate 84",
        antall_personer: "3",
        bad: "2",
        kvm: "85kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Bergen",
        img: "l3.jpg",
        adresse: "Thomas gate 9",
        antall_personer: "2",
        bad: "2",
        kvm: "78kvm",
        bolig_type: "leilighet"
    },
    {
        by: "Tromsø",
        img: "h2.jpg",
        adresse: "Sams gate 7",
        antall_personer: "6",
        bad: "3",
        kvm: "172kvm",
        bolig_type: "hus"
    },
    {
        by: "Tromsø",
        img: "r2.jpg",
        adresse: "Klæbu gate 1",
        antall_personer: "4",
        bad: "2",
        kvm: "89kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Tromsø",
        img: "l2.jpg",
        adresse: "Williams gate 112",
        antall_personer: "1",
        bad: "1",
        kvm: "55kvm",
        bolig_type: "leilighet"
    },
    {
        by: "Molde",
        img: "h1.jpg",
        adresse: "Kristians gate 117",
        antall_personer: "5",
        bad: "3",
        kvm: "143kvm",
        bolig_type: "hus"
    },
    {
        by: "Molde",
        img: "r1.jpg",
        adresse: "Torvald gate 65",
        antall_personer: "3",
        bad: "2",
        kvm: "100kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Molde",
        img: "l1.jpg",
        adresse: "Bentes gate 17",
        antall_personer: "1",
        bad: "2",
        kvm: "76kvm",
        bolig_type: "leilighet"
    },
    {
        by: "Fredrikstad",
        img: "h7.jpg",
        adresse: "Kåres gate 45",
        antall_personer: "5",
        bad: "3",
        kvm: "120kvm",
        bolig_type: "hus"
    },
    {
        by: "Fredrikstad",
        img: "r7.jpg",
        adresse: "Hesthagen 70",
        antall_personer: "4",
        bad: "2",
        kvm: "98kvm",
        bolig_type: "rekkehus"
    },
    {
        by: "Fredrikstad",
        img: "l7.jpg",
        adresse: "Bentes gate 91",
        antall_personer: "2",
        bad: "1",
        kvm: "55kvm",
        bolig_type: "leilighet"
    }
]


const sendBtn = document.getElementById("submit")
const contentWrapper = document.getElementById("contentWrapper")
const form_div = document.getElementById("form_div")
const frm_kontaktInfo = document.getElementById("frm_kontaktInfo")
const oppe = document.getElementById("oppe")
const nede = document.getElementById("nede")
const kontaktInfo_div = document.getElementById("kontaktInfo_div")
const kontaktInfo_navn = document.getElementById("kontaktInfo_navn")
const kontaktInfo_tlf = document.getElementById("kontaktInfo_tlf")



let filtered_houses = []

// Her lages filter funksjonen. Den henter inn dataen fra input feltene til nærmeste by og antall personer.
function filterHouses(){
    const inBy = document.getElementById("dropDown")
    const inPersoner = document.getElementById("inPersoner")

// Her looper vi gjennom bolig-arrayen "databasen" og sammenligner verdiene fra input feltene mot arrayen.
// Hvis input dataen opfyller kravene i if-statementen skal de gjeldene boligene dyttes inn i arrayen filtered_houses, som vi senere tar utgangspunkt i når vi skal filtrere søket. 

    for (i = 0; i<boliger.length; i++){
        if ((inBy.value) == (boliger[i].by) && parseInt(inPersoner.value) <= boliger[i].antall_personer){
            filtered_houses.push(boliger[i])
        }

    }
}

// Her lager vi en showAll funksjon som kjøres med en gang, slik at alle boligene kommer opp med en gang vi kommer til siden. 
function showAll() {
    for (i = 0; i<boliger.length; i++){
        filtered_houses.push(boliger[i])
    }
}

// Her har vi funksjonen som oppretter html-elementene for hver bolig som ligger i filtered_houses arrayen.
// Den tar inn en funksjon som paramter, og på denne måten kan vi vise husene med ulike utgangspunkt avhengig av hvilken funksjon vi vil at skal påvirke hva som blir filtrert.
function presentHouses(func_param){
    func_param()
    // nullstuller checkBox arrayen.
    cbArray=[];
    for (i = 0; i<filtered_houses.length; i++){

        // lager input element og endrer det til checkbox + gir det en class.
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.className = "checkBoxClass"
        checkBox.id ='cb'+i+'';
        // Dytter checkbox inputten inn i arrayen cbArray
        cbArray.push(checkBox);


        // lager et div element som skal inneholde alt om hver bolig + gir den class.
        const content = document.createElement("div")
        content.className = "content"

        // lager en ul som skal inneholde nesten all bolig-dataen som li-elementer + gir den class
        const ul = document.createElement("ul")
        ul.className = "listClass"

        const by = document.createElement("li")
        by.className = "listItemClass"

        const li_img = document.createElement("li")
        li_img.className = "listItemClass"

        const adresse_h3 = document.createElement("h3")

        const antall_personer = document.createElement("li")
        antall_personer.className = "listItemClass"

        const bolig_type = document.createElement("li")
        bolig_type.className = "listItemClass"

        const bad = document.createElement("li")
        bad.className = "listItemClass"
        
        const kvm = document.createElement("li")
        kvm.className = "listItemClass"
        
        // lager nye variabler som vi putter dataen fra bolig-arrayen inn i. 
        const by_data = document.createTextNode(`By: ${filtered_houses[i].by}`)
        const adresse_data = document.createTextNode(filtered_houses[i].adresse)
        const antall_personer_data = document.createTextNode(`${filtered_houses[i].antall_personer} sengeplasser`)
        const bolig_type_data = document.createTextNode(`boligtype: ${filtered_houses[i].bolig_type}`)
        const bad_data = document.createTextNode(`Antall bad: ${filtered_houses[i].bad}`)
        const kvm_data = document.createTextNode(filtered_houses[i].kvm)

    
        // lager her et img-element + gir den classname + legger til src som referer til bildene i img-folderen vår.
        // Vi gir den også en alt. Deretter putter vi bilde inn i li elementet vi lagde istad.
        const img = document.createElement('img')
        img.className = "husBilder"
        img.src = "../img/bilder_i_byer/" + filtered_houses[i].img
        img.alt = filtered_houses[i].img
        li_img.appendChild(img)

        // Her putter vi data variabelene inn i li-elementene vi lagde ovenfor i starten av denne funksjonen. 
        by.appendChild(by_data)
        adresse_h3.appendChild(adresse_data)
        antall_personer.appendChild(antall_personer_data)
        bolig_type.appendChild(bolig_type_data)
        bad.appendChild(bad_data)
        kvm.appendChild(kvm_data)

        // Deretter putter vi li-elementene inn i ul-elementet.
        ul.appendChild(adresse_h3)
        ul.appendChild(by)
        ul.appendChild(antall_personer)
        ul.appendChild(bolig_type)
        ul.appendChild(bad)
        ul.appendChild(kvm)

        // Deretter putter vi li-bilde elementet + ul lista og checkboxen inn i content diven.
        content.appendChild(li_img)
        content.appendChild(ul)
        content.appendChild(checkBox)
        content.style.backgroundColor="white"
        // Tilslutt putter vi content inn i nede div-elementet. 
        nede.appendChild(content)
    }
}
// Viser alle husene som finnes som default. Endres når vi spesifiserer søket
presentHouses(showAll)


// setter returnList til empty. Denne skal inneholde checkboxene som har blitt 
returnList=[]

// legger til en eventlistener som lytter til endringer på input elementene. Vi har jo kun 2 input elementer
// i denne diven, og det er inBy og inPersoner. Under her blir presentHouses funskjonen kjørt med filterHouses som en parameter.
// Dette resulterer i at når man endrer på inputen til en av de to feltene vil filter og present funksjonen kjøres
// og de boligene som stemmer med dataen fra inputtene vil bli vist frem. 
form_div.addEventListener("input", (e) => {
    e.preventDefault()
    filtered_houses = []
    nede.innerHTML = ""
    presentHouses(filterHouses)
    if (filtered_houses.length < 1){
        kontaktInfo_div.innerHTML = "Ingen boliger oppfyller kravet til antall personer du har skrevet inn"
    }
    else {
        kontaktInfo_div.innerHTML = ""
    }
}) 

// Her lager vi en funksjon som lager en knapp og, og som i tillegg får en eventlistener. Denne koden kjøres
// bare hvis man submitter uten å ha valgt et hus. Da får man opp denne knappen og litt hjelpetekst, slik at man
// forstår hva man skal gjøre. 
function lagKnapp(){
    nede.innerHTML='';

    let knapp = document.createElement('button')
    let br = document.createElement("br")
    let br2 = document.createElement("br")
    knapp.innerHTML='Tilbake'
    knapp.style.color = 'white';
    knapp.addEventListener('click', () => {
        window.location.replace('../documents/rammede.html');
    })
    oppe.innerHTML='Du har ikke valgt noen bolig! \n Huk av en bolig under tilgjengelige boliger, og send søknaden på nytt.'
    oppe.appendChild(br)
    oppe.appendChild(br2)
    oppe.appendChild(knapp)
    

  }

function checkBoxStat(list){
   returnList = [];
   
   console.log(list.length);
    for (let i=0; i<list.length; i++){
        if (list[i].checked==true)
            returnList.push(filtered_houses[i].adresse);
        
    }

    if(returnList.length==0) {
        console.log("hei")
        
        return "Du har ikke søkt noen bolig"
        
    }
    else{
        return String(returnList)
    }
}


frm_kontaktInfo.onsubmit = (e) => {
    e.preventDefault()
       let a = checkBoxStat(cbArray);
       if (a=="Du har ikke søkt noen bolig"){
        oppe.innerHTML = ""
         
        nede.innerHTML += "<br><br>"
        nede.innerHTML += `Du vil få melding på nummeret: ${kontaktInfo_tlf.value} ` 
        lagKnapp()
       } 

       else {

            kontaktInfo_div.innerHTML = ""
            oppe.innerHTML = ""
            nede.innerHTML = `Du har nå sendt søknad om ${a} ` 
            nede.innerHTML += "<br><br>"
            nede.innerHTML += `Du vil få melding på nummeret: ${kontaktInfo_tlf.value} `            

        } 
    }

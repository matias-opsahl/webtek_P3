// 1-2 leilghet
// 2-4 rekkehus
// 4-> hus

boliger = [
    
    {
        by: "Oslo",
        img: "h6.jpeg",
        adresse: "Håkons gate 24",
        antall_personer: "5",
        bolig_type: "hus"
    },
    {
        by: "Oslo",
        img: "r6.jpeg",
        adresse: "Sanders gate 76",
        antall_personer: "3",
        bolig_type: "rekkehus"
    },
    {
        by: "Oslo",
        img: "l6.jpeg",
        adresse: "Jespers gate 12",
        antall_personer: "2",
        bolig_type: "leilighet"
    },
    {
        by: "Trondheim",
        img: "h5.jpeg",
        adresse: "Matias gate 98",
        antall_personer: "4",
        bolig_type: "hus"
    },
    {
        by: "Trondheim",
        img: "r6.jpeg",
        adresse: "Jespers gate 12",
        antall_personer: "2",
        bolig_type: "rekkehus"
    },
    {
        by: "Trondheim",
        img: "l5.jpeg",
        adresse: "Hansens gate 22",
        antall_personer: "2",
        bolig_type: "leilighet"
    },
    {
        by: "Kristiansand",
        img: "h4.jpeg",
        adresse: "Fredriks gate 81",
        antall_personer: "6",
        bolig_type: "hus"
    },
    {
        by: "Kristiansand",
        img: "r4.jpeg",
        adresse: "Markus gate 92",
        antall_personer: "2",
        bolig_type: "rekkehus"
    },
    {
        by: "Kristiansand",
        img: "l4.jpeg",
        adresse: "Bilals gate 77",
        antall_personer: "1",
        bolig_type: "leilighet"
    },
    {
        by: "Bergen",
        img: "h3.jpg",
        adresse: "Olavs gate 13",
        antall_personer: "5",
        bolig_type: "hus"
    },
    {
        by: "Bergen",
        img: "r3.jpg",
        adresse: "Hakeems gate 84",
        antall_personer: "3",
        bolig_type: "rekkehus"
    },
    {
        by: "Bergen",
        img: "l3.jpg",
        adresse: "Thomas gate 9",
        antall_personer: "2",
        bolig_type: "leilighet"
    },
    {
        by: "Tromsø",
        img: "h2.jpg",
        adresse: "Sams gate 7",
        antall_personer: "6",
        bolig_type: "hus"
    },
    {
        by: "Tromsø",
        img: "r2.jpg",
        adresse: "Klæbu gate 1",
        antall_personer: "4",
        bolig_type: "rekkehus"
    },
    {
        by: "Tromsø",
        img: "l2.jpg",
        adresse: "Williams gate 112",
        antall_personer: "1",
        bolig_type: "leilighet"
    },
    {
        by: "Molde",
        img: "h1.jpg",
        adresse: "Kristians gate 117",
        antall_personer: "5",
        bolig_type: "hus"
    },
    {
        by: "Molde",
        img: "r1.jpg",
        adresse: "Torvald gate 65",
        antall_personer: "3",
        bolig_type: "rekkehus"
    },
    {
        by: "Molde",
        img: "l1.jpg",
        adresse: "Bentes gate 17",
        antall_personer: "1",
        bolig_type: "leilighet"
    },
    {
        by: "Fredrikstad",
        img: "h7.jpeg",
        adresse: "Kåres gate 45",
        antall_personer: "5",
        bolig_type: "hus"
    },
    {
        by: "Fredrikstad",
        img: "r7.jpeg",
        adresse: "Hesthagen 70",
        antall_personer: "4",
        bolig_type: "rekkehus"
    },
    {
        by: "Fredrikstad",
        img: "l7.jpeg",
        adresse: "Bentes gate 91",
        antall_personer: "2",
        bolig_type: "leilighet"
    }
]

fake_city_input = "Oslo"
fake_number_of_people_input = 3

const inBy = document.getElementById("inBy")
const inPersoner = document.getElementById("inPersoner")
const sendBtn = document.getElementById("submit")

const contentWrapper = document.getElementById("contentWrapper")
const filtered_houses = []


function filterHouses(){
    for (i = 0; i<boliger.length; i++){
        if (fake_city_input == boliger[i].by && fake_number_of_people_input <= boliger[i].antall_personer){
            filtered_houses.push(boliger[i])
        }

    }
}

function showAll() {
    for (i = 0; i<boliger.length; i++){
        filtered_houses.push(boliger[i])
    }
}

function presentHouses(){
    showAll()
    for (i = 0; i<filtered_houses.length; i++){
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.className = "checkBoxClass"

        const content = document.createElement("div")
        content.className = "content"

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
        
        const by_data = document.createTextNode(`By: ${filtered_houses[i].by}`)
        const adresse_data = document.createTextNode(filtered_houses[i].adresse)
        const antall_personer_data = document.createTextNode(`${filtered_houses[i].antall_personer} sengeplasser`)
        const bolig_type_data = document.createTextNode(filtered_houses[i].bolig_type)

    
        const img = document.createElement('img')
        img.className = "husBilder"
        img.src = "../img/bilder_i_byer/" + filtered_houses[i].img
        li_img.appendChild(img)

        by.appendChild(by_data)
        adresse_h3.appendChild(adresse_data)
        antall_personer.appendChild(antall_personer_data)
        bolig_type.appendChild(bolig_type_data)

        ul.appendChild(adresse_h3)
        ul.appendChild(by)
        ul.appendChild(antall_personer)
        ul.appendChild(bolig_type)

        content.appendChild(li_img)
        content.appendChild(ul)
        content.appendChild(checkBox)

        contentWrapper.appendChild(content)
    }
}
presentHouses()

sendBtn.onclick = (e) =>{
    e.preventDefault()
    filterHouses()
    presentHouses()
}


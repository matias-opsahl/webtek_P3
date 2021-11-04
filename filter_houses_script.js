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

const innhold = document.getElementById("innhold")
const filtered_houses = []

function filterHouses(){
    for (i = 0; i<boliger.length; i++){
        if (fake_city_input == boliger[i].by && fake_number_of_people_input <= boliger[i].antall_personer){
            filtered_houses.push(boliger[i])
            
            

        }
    }
}

filterHouses()
console.log(filtered_houses)


// function presentHouses(){
//     filterHouses()
//     for (i = 0; i<filtered_houses.length; i++){

//         const houseDiv = document.createElement("div")

//         const by = document.createElement("li")
//         const li_img = document.createElement("li")

//         const adresse = document.createElement("li")
//         const antall_personer = document.createElement("li")
//         const bolig_type = document.createElement("li")
        
//         const by_data = document.createTextNode(filtered_houses[i].by)
//         const adresse_data = document.createTextNode(filtered_houses[i].adresse)
//         const antall_personer_data = document.createTextNode(filtered_houses[i].antall_personer)
//         const bolig_type_data = document.createTextNode(filtered_houses[i].bolig_type)

    
//         const img = document.createElement('img')
//         img.src = "../img/bilder_i_byer/" + filtered_houses[i].img
//         img.width = 200
//         img.height = 200
//         li_img.appendChild(img)

//         by.appendChild(by_data)
//         adresse.appendChild(adresse_data)
//         antall_personer.appendChild(antall_personer_data)
//         bolig_type.appendChild(bolig_type_data)

//         houseDiv.appendChild(by)
//         houseDiv.appendChild(li_img)
//         houseDiv.appendChild(adresse)
//         houseDiv.appendChild(antall_personer)
//         houseDiv.appendChild(bolig_type)

//         innhold.appendChild(houseDiv)
//     }
// }

// presentHouses()
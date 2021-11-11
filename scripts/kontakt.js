const form_div = document.getElementById('form_div')
const frm = document.getElementById('frm')
const navn = document.getElementById("kontakt_navn")
const epost = document.getElementById("kontakt_epost")
const kontakt_fieldset = document.getElementById("kontakt_fieldset")

// Her henter vi ut dataen fra navn og epost. Så lager vi en fieldset og putter dataen inn
// på et passende format, som gir brukeren en følelse av at ting gikk som det skulle


frm.onsubmit = (e) => {
    e.preventDefault()
    kontakt_fieldset.style.display = "none"
    form_div.style.marginLeft = "10%"
    const fieldset = document.createElement("fieldset")
    const legend = document.createElement("legend")
    const tilbakemld = document.createTextNode("Tilbakemelding")
    const data = document.createTextNode(`Hei ${navn.value}! Meldingen din er motatt. Du vil få svar på ${epost.value}`)
    const br = document.createElement("br")
    legend.appendChild(tilbakemld)
    fieldset.appendChild(legend)
    fieldset.appendChild(br)
    fieldset.appendChild(data)
    form_div.appendChild(fieldset)
    fieldset.style.marginRight = "20%"
    
}


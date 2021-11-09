const form_div = document.getElementById('form_div')
const frm = document.getElementById('frm')

frm.onsubmit = (e) => {
    e.preventDefault()
    form_div.innerHTML = "<h2>Takk for din melding</h2>"
}
const navbar = document.getElementById('navbar');
const info = document.getElementById('food');
const footer = document.getElementById('footer');

// div inner og div outer
const navbar_outer1 = document.createElement('div')
navbar_outer1.setAttribute('class', 'navbar_outer')

const navbar_inner1 = document.createElement('div')
navbar_inner1.setAttribute('class', 'navbar_inner')

const navbar_outer2 = document.createElement('div')
navbar_outer2.setAttribute('class', 'navbar_outer')

const navbar_inner2 = document.createElement('div')
navbar_inner2.setAttribute('class', 'navbar_inner')

const navbar_outer3 = document.createElement('div')
navbar_outer3.setAttribute('class', 'navbar_outer')

const navbar_inner3 = document.createElement('div')
navbar_inner3.setAttribute('class', 'navbar_inner')

const navbar_outer4 = document.createElement('div')
navbar_outer4.setAttribute('class', 'navbar_outer')

const navbar_inner4 = document.createElement('div')
navbar_inner4.setAttribute('class', 'navbar_inner')

const navbar_outer5 = document.createElement('div')
navbar_outer5.setAttribute('class', 'navbar_outer')

const navbar_inner5 = document.createElement('div')
navbar_inner5.setAttribute('class', 'navbar_inner')

// div inner img og div outer img
const navbar_outer_img = document.createElement('div')
navbar_outer_img.setAttribute('class', 'navbar_outer_img')

const navbar_inner_img = document.createElement('div')
navbar_inner_img.setAttribute('class', 'navbar_inner_img')

// setter attributene til logo
const logo_a = document.createElement('a')
logo_a.setAttribute('href', 'hjemmeside.html')

const logo_img = document.createElement('img')
logo_img.setAttribute('src', '../img/logo.jpeg')
logo_img.setAttribute('alt', 'logo')

// appender logo til a, element, og så til img inner, img outer, og navbar
logo_a.appendChild(logo_img)
navbar_inner_img.appendChild(logo_a)
navbar_outer_img.appendChild(navbar_inner_img)
navbar.appendChild(navbar_outer_img)

// setter attributene til hjemmeside link
const hjem_a = document.createElement('a')
hjem_a.setAttribute('href', 'hjemmeside.html')

const hjem_p = document.createElement('p')
const hjem_tekst = document.createTextNode('Hjemmeside')

// appender tekst til p, p til a, a til inner, inner til outer, outer til navbar
hjem_p.appendChild(hjem_tekst)
hjem_a.appendChild(hjem_p)
navbar_inner1.appendChild(hjem_a)
navbar_outer1.appendChild(navbar_inner1)
navbar.appendChild(navbar_outer1)

// setter attributene til rammede link
const rammede_a = document.createElement('a')
rammede_a.setAttribute('href', 'rammede.html')

const rammede_p = document.createElement('p')
const rammede_tekst = document.createTextNode('Finn bolig')

// appender tekst til p, p til a, a til inner, inner til outer, outer til navbar
rammede_p.appendChild(rammede_tekst)
rammede_a.appendChild(rammede_p)
navbar_inner2.appendChild(rammede_a)
navbar_outer2.appendChild(navbar_inner2)
navbar.appendChild(navbar_outer2)

// setter attributene til frivillige link
const frivillige_a = document.createElement('a')
frivillige_a.setAttribute('href', 'frivillige.html')

const frivillige_p = document.createElement('p')
const frivillige_tekst = document.createTextNode('Lån ut bolig')

// appender tekst til p, p til a, a til inner, inner til outer, outer til navbar
frivillige_p.appendChild(frivillige_tekst)
frivillige_a.appendChild(frivillige_p)
navbar_inner3.appendChild(frivillige_a)
navbar_outer3.appendChild(navbar_inner3)
navbar.appendChild(navbar_outer3)

// setter attributene til om oss link
const om_a = document.createElement('a')
om_a.setAttribute('href', 'om_oss.html')

const om_p = document.createElement('p')
const om_tekst = document.createTextNode('Om oss')

// appender tekst til p, p til a, a til inner, inner til outer, outer til navbar
om_p.appendChild(om_tekst)
om_a.appendChild(om_p)
navbar_inner4.appendChild(om_a)
navbar_outer4.appendChild(navbar_inner4)
navbar.appendChild(navbar_outer4)

// setter attributene til kontakt link
const kontakt_a = document.createElement('a')
kontakt_a.setAttribute('href', 'kontakt.html')

const kontakt_p = document.createElement('p')
const kontakt_tekst = document.createTextNode('Kontakt oss')

// appender tekst til p, p til a, a til inner, inner til outer, outer til navbar
kontakt_p.appendChild(kontakt_tekst)
kontakt_a.appendChild(kontakt_p)
navbar_inner5.appendChild(kontakt_a)
navbar_outer5.appendChild(navbar_inner5)
navbar.appendChild(navbar_outer5)

// legger til tekst i footer
footer_tittel = document.createElement('h3')
footer_tittel_tekst = document.createTextNode('Krisebolig')

footer_info = document.createElement('p')
footer_info_tekst = document.createTextNode('Denne nettsiden er laget av; Chris Wardnær, Daniel Jackman Røe, Jesper Lybeck, Matias Opsahl, Sander Skogh Linnerud')

footer_tittel.appendChild(footer_tittel_tekst)
footer.appendChild(footer_tittel)

footer_info.appendChild(footer_info_tekst)
footer.appendChild(footer_info)
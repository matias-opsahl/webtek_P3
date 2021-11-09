
/* Kontakt oss, ofte stiltespørsmål CSS

Må endre på getElement byClassName() 
ut i fra hva class name på kontakt oss siden er

*/

let qNa = document.getElementsByClassName("qNa2");
for (index = 0; index < qNa.length; index++) {
    qNa[index].addEventListener("click", function() {   
        this.classList.toggle("active");   
        let spørsmål = this.nextElementSibling;
        if (spørsmål.style.display === "block") {
            spørsmål.style.display = "none"
        } 
        else {
            spørsmål.style.display = "block"
        }
    });
}

/*
kilder: https://sweetcode.io/how-to-build-an-faq-page-with-html-and-javascript/
*/

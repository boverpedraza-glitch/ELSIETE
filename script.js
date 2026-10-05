// ================================
// MENÚ MÓVIL
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}


// ================================
// CERRAR MENÚ AL PULSAR UN ENLACE
// ================================

const links = document.querySelectorAll("#nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ================================
// CERRAR MENÚ AL HACER CLIC FUERA
// ================================

document.addEventListener("click", (event) => {

    if (
        nav &&
        menuButton &&
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        nav.classList.remove("active");

    }

});
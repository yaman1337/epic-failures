const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
    nav.setAttribute("style", "transform: translateX(0);")
    hamburger.setAttribute("style", "display: none;")
    closeMenu.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; font-size: 1.3rem; padding: 1rem; cursor: pointer;")

    closeMenu.addEventListener("click", () => {
        nav.setAttribute("style", "display: none;transform: translateX(100%);")
        hamburger.setAttribute("style", "display: block;");
        window.location.assign(window.location);
    })
})
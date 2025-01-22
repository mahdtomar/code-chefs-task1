const listIcon = document.querySelector(".menu-image");
const menu = document.querySelector("nav .menu");
const parentMenu = document.querySelector("li.parent-menu");
const subMenu = document.querySelector(".menu .sub-menu");
listIcon.addEventListener("click", () => {
    menu.classList.toggle("visible");
    // menu.classList.contains("visible")
    //     ? menu.classList.remove("visible")
    //     : menu.classList.add("visible");
});
parentMenu.addEventListener("click", () => {
    subMenu.classList.toggle("visible");
});

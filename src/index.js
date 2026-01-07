import "./style.css";
import { buildLogo } from "./logo.js";
import { buildHome } from "./home.js";
import { buildMenu } from "./menu.js";
import { buildContact } from "./contact.js";

const render = (function () {
    const main = document.querySelector("main");

    // Build the page initially
    buildLogo();
    buildHome(main);

    // If any buttons are clicked, handle the page loading
    document.addEventListener("click", function (event) {
        switch (event.target.className) {
            case "home":
                clearMain();
                buildHome(main);
                break;
            case "menu":
                clearMain();
                buildMenu(main);
                break;
            case "contact":
                clearMain();
                buildContact(main);
                break;
            case "order":
                event.target.textContent = "Coming Soon!";
        }
    });

    // Clear the page if there is data present
    function clearMain() {
        while (main.lastElementChild) {
            main.removeChild(main.lastElementChild);
        }
    };
})();
render;
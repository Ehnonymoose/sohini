/**
 * Main JS file for Casper behaviours
 */

 (function() {
    "use strict";

    var menuButton = document.getElementById("menu-button");
    menuButton.addEventListener("click", function(e) {
        e.preventDefault();

        document.body.classList.toggle("nav-opened");
        document.body.classList.toggle("nav-closed");
    });

 })();

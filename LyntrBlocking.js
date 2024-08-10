// ==UserScript==
// @name         LyntrBlocking
// @version      2024-08-10
// @description  Are you on a lyntr fork and you find someone annoying? Well now you can block them!
// @author       @cad4
// @match        https://lyntr.jnnj.xyz/*
// @match        https://lyntr2.jnnj.xyz/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ADD BLOCKED USERS HERE
    const _BlockedUsers_ = [
        "@operagxofficial"
    ];

    
    // DONT EDIT ANYTHING PAST HERE
    function blockUserPosts() {
        const anchors = document.querySelectorAll("a[href^='/@']");

        anchors.forEach(anchor => {
            const handle = anchor.getAttribute("href").slice(1);

            if (_BlockedUsers_.includes(handle)) {
                let parentDiv = anchor.closest("div[class=\"flex w-full gap-3 overflow-hidden rounded-xl bg-lynt-foreground p-3 transition-colors hover:bg-border lyntr-plus-lyntTransparency-So3E25ENwU0FkobI\"]");

                if (parentDiv) {
                    parentDiv.remove();
                }
            }
        });
    }

    // Run the function on page load
    window.addEventListener('load', () => {
        blockUserPosts();

        // Observe the DOM for changes and remove new posts as they appear
        const observer = new MutationObserver(() => {
            blockUserPosts();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})();

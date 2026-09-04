/* =========================================================
   TYPING ANIMATION
========================================================= */

const words = [
    "GIS Specialist",
    "Remote Sensing Specialist",
    "GeoAI Engineer",
    "Researcher"
];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");


function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];


    /* -------------------------
       TYPING
    ------------------------- */

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        /* Word completely typed */

        if (characterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }


        setTimeout(typeEffect, 90);

    }


    /* -------------------------
       DELETING
    ------------------------- */

    else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        /* Word completely deleted */

        if (characterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            setTimeout(typeEffect, 300);

            return;
        }


        setTimeout(typeEffect, 55);
    }
}


/* Start typing */

typeEffect();



/* =========================================================
   ACTIVE NAVIGATION WHILE SCROLLING
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });
}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* Run once when page loads */

updateActiveNavigation();



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
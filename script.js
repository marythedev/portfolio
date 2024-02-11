const navIcon = document.getElementById("nav-icon");
const navContent = document.getElementById("nav-content");
const resumeButton = document.querySelector("#resume button");
const desktopMedia = window.matchMedia("(min-width: 993px)");
let year = new Date().getFullYear();

// expand and collapse the navigation menu
navIcon.addEventListener("click", () => {
    document.body.classList.toggle("hide-overflow");
    navIcon.classList.toggle("activated");
    navContent.classList.toggle("activated");
    resumeButton.classList.toggle("btn-outline-dark");
    resumeButton.classList.toggle("btn-outline-light");
});

// change button color when the screen size changes
desktopMedia.addEventListener("change", () => {
    resumeButton.classList.toggle("btn-outline-light");
    resumeButton.classList.toggle("btn-outline-dark");
});

// scroll to the section when a link is clicked
document.querySelectorAll('a[data-scroll-section]').forEach(link => {

    link.addEventListener('click', (e) => {
        e.preventDefault();

        let scrollSection = link.getAttribute('data-scroll-section');
        let targetSection = document.getElementById(scrollSection);
        let scrollTo = targetSection.getBoundingClientRect().top - scrollY;

        if (navContent.classList.contains("activated")) {
            document.body.classList.remove("hide-overflow");
            navIcon.classList.remove("activated");
            navContent.classList.remove("activated");
        }

        window.scrollBy({
            top: scrollTo,
            behavior: 'smooth'
        });
    });
});

// update footer with the current year
document.getElementById("year").textContent = year;
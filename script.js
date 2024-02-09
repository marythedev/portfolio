const navIcon = document.getElementById("nav-icon");
const navContent = document.getElementById("nav-content");
const resumeButton = document.querySelector("#resume button");

navIcon.addEventListener("click", function(e) {
    document.body.classList.toggle("hide-overflow");
    navIcon.classList.toggle("activated");
    navContent.classList.toggle("activated");
    resumeButton.classList.toggle("btn-outline-dark");
    resumeButton.classList.toggle("btn-outline-light");
});

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
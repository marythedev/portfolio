const navIcon = document.getElementById("nav-icon");
const navContent = document.getElementById("nav-content");
const resumeButton = document.querySelector("#resume button");
const redirectionElements = document.querySelectorAll(".no-link-change");
let year = new Date().getFullYear();

// expand and collapse the navigation menu
navIcon.addEventListener("click", () => {
    document.body.classList.toggle("hide-overflow");
    navIcon.classList.toggle("activated");
    navContent.classList.toggle("activated");
});

// scroll to the section when a link is clicked
document.querySelectorAll('#nav-content a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (navContent.classList.contains("activated")) {
            document.body.classList.remove("hide-overflow");
            navIcon.classList.remove("activated");
            navContent.classList.remove("activated");
        }
    });
});

// toggle classes on mouse in and out
document.querySelectorAll(".img-preview").forEach(img => {
    let hover = img.getElementsByClassName("img-hover");
    img.addEventListener("mouseover", () => {
        hover[0].style.display = "flex";
    });
    img.addEventListener("mouseout", () => {
        hover[0].style.display = "none";
    });
});

//display/hide descriptions on project cards
document.querySelectorAll(".project").forEach(project => {
    let readDescription = project.getElementsByClassName("btn-description");
    let goBack = project.getElementsByClassName("btn-go-back");
    let preview = project.getElementsByClassName("preview");
    let description = project.getElementsByClassName("description");

    readDescription[0].addEventListener('click', (e) => {
        preview[0].style.display = "none";
        description[0].style.display = "block";
    });

    goBack[0].addEventListener('click', (e) => {
        preview[0].style.display = "block";
        description[0].style.display = "none";
        project.style.height = "auto";
    });
});

// update footer with the current year
document.getElementById("year").textContent = year;

// set the particles background
// https://vincentgarreau.com/particles.js/
particlesJS("", {
    "particles": {
        "number": {
            "value": 7,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#DCDCDC"  // nice colors: #A4957D (0.2 opacity), #d1cece (0.4), #DCDCDC (0.6-0.7), #C0C0C0 (0.3)
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 6
            },
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 150,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    // disabled with z-index
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
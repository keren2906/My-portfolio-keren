/* ========================= */
/* LOADER */
/* ========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            gsap.to(loader, {

                opacity: 0,
                scale: 1.1,
                duration: 1.2,

                onComplete: () => {

                    loader.style.display = "none";

                }

            });

        }, 2200);

    }

});


/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon =
        menuToggle.querySelector("i");

        if(navbar.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* ========================= */
/* CLOSE MENU WHEN CLICK */
/* ========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});


/* ========================= */
/* HEADER SCROLL EFFECT */
/* ========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(header){

        header.classList.toggle(
            "scroll-header",
            window.scrollY > 50
        );

    }

});


/* ========================= */
/* TYPING EFFECT HERO */
/* ========================= */

const typingText = document.querySelector(".hero-subtitle");

const words = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Frontend Developer",
    "Creative Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    if(!typingText) return;

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex--);

    }else{

        typingText.textContent =
        currentWord.substring(0, charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length){

        speed = 1800;
        isDeleting = true;

    }else if(isDeleting && charIndex === 0){

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


/* ========================= */
/* ACTIVE LINK ON SCROLL */
/* ========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active-link");

        }

    });

});


/* ========================= */
/* PARALLAX HERO IMAGE */
/* ========================= */

const heroImage =
document.querySelector(".hero-image-wrapper");

if(heroImage){

    window.addEventListener("mousemove", (e) => {

        const x =
        (window.innerWidth / 2 - e.pageX) / 40;

        const y =
        (window.innerHeight / 2 - e.pageY) / 40;

        heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

    });

}


/* ========================= */
/* PROJECT HOVER EFFECT */
/* ========================= */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});

/* ========================= */
/* SMART FLOATING SCROLL BUTTON */
/* ========================= */

const scrollBtn =
document.createElement("button");

scrollBtn.classList.add("smart-scroll-btn");

scrollBtn.innerHTML =
'<i class="fa-solid fa-arrow-down"></i>';

document.body.appendChild(scrollBtn);


/* UPDATE ICON */

function updateScrollButton(){

    const scrollTop =
    window.scrollY;

    const windowHeight =
    window.innerHeight;

    const documentHeight =
    document.documentElement.scrollHeight;

    /* SHOW BUTTON */

    if(scrollTop > 150){

        scrollBtn.classList.add("show-smart-btn");

    }else{

        scrollBtn.classList.remove("show-smart-btn");

    }

    /* IF USER IS NEAR BOTTOM */

    if(
        scrollTop + windowHeight
        >= documentHeight - 300
    ){

        scrollBtn.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

        scrollBtn.classList.add("up");

    }else{

        scrollBtn.innerHTML =
        '<i class="fa-solid fa-arrow-down"></i>';

        scrollBtn.classList.remove("up");

    }

}

window.addEventListener(
    "scroll",
    updateScrollButton
);


/* CLICK ACTION */

scrollBtn.addEventListener("click", () => {

    if(scrollBtn.classList.contains("up")){

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }else{

        window.scrollTo({

            top:
            document.body.scrollHeight,

            behavior: "smooth"

        });

    }

});


/* ========================= */
/* CONTACT FORM EMAILJS */
/* ========================= */

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        /* ========================= */
        /* MESSAGE POUR MOI */
        /* ========================= */

        emailjs.sendForm(

            "service_4c683nn",
            "template_0wi3o61",
            "#contact-form",
            "6Fb9DMpeKBVoSYEw-"

        )

        .then(() => {

            /* ========================= */
            /* AUTO REPONSE VISITEUR */
            /* ========================= */

            return emailjs.sendForm(

                "service_4c683nn",
                "template_g1sxtde",
                "#contact-form",
                "6Fb9DMpeKBVoSYEw-"

            );

        })

        .then(() => {

            alert(
                "Message envoyé avec succès ✨"
            );

            contactForm.reset();

        })

        .catch((error) => {

            console.log("ERROR:", error);

            alert(
                "Erreur lors de l’envoi du message."
            );

        });

    });

}

/* ========================= */
/* DARK / LIGHT MODE */
/* ========================= */

const themeToggle =
document.querySelector(".theme-toggle");

const logoImage =
document.getElementById("logo-image");

const footerLogo =
document.getElementById("footer-logo");

if(themeToggle){

    const themeIcon =
    themeToggle.querySelector("i");

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        /* ========================= */
        /* LIGHT MODE */
        /* ========================= */

        if(document.body.classList.contains("light-mode")){

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

            /* HEADER LOGO */

            logoImage.src =
            "asset/images/profil/logo_mode_claire.png";

            /* FOOTER LOGO */

            footerLogo.src =
            "asset/images/profil/logo_mode_claire.png";

        }

        /* ========================= */
        /* DARK MODE */
        /* ========================= */

        else{

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

            /* HEADER LOGO */

            logoImage.src =
            "asset/images/profil/logo_mode_sombre.png";

            /* FOOTER LOGO */

            footerLogo.src =
            "asset/images/profil/logo_mode_sombre.png";

        }

    });

}


/* ========================= */
/* GSAP ANIMATIONS */
/* ========================= */

gsap.registerPlugin(ScrollTrigger);


/* HERO ANIMATIONS */

gsap.from(".hero-subtitle", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 2.2

});

gsap.from(".hero-content h1", {

    y: 60,
    opacity: 0,
    duration: 1,
    delay: 2.4

});

gsap.from(".hero-content h2", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 2.6

});

gsap.from(".hero-description", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 2.8

});

gsap.from(".hero-buttons", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 3

});

gsap.from(".hero-socials", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 3.2

});

gsap.from(".hero-image", {

    scale: 0.8,
    opacity: 0,
    duration: 1.4,
    delay: 2.5

});


/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

gsap.utils.toArray(

    ".service-card, .skill-item, .project-card, .testimonial-card, .about-content, .about-image, .contact-info, .contact-form"

).forEach((element) => {

    gsap.from(element, {

        scrollTrigger: {

            trigger: element,
            start: "top 85%"

        },

        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"

    });

});


/* ========================= */
/* SKILLS ANIMATION */
/* ========================= */

gsap.from(".skills-left", {

    scrollTrigger: {

        trigger: ".skills",
        start: "top 75%"

    },

    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"

});


gsap.from(".skill-item", {

    scrollTrigger: {

        trigger: ".skills-right",
        start: "top 80%"

    },

    y: 80,
    opacity: 0,

    duration: 1,

    stagger: 0.12,

    ease: "power3.out"

});

/* ========================= */
/* SKILLS FILTER */
/* ========================= */

const filterButtons =
document.querySelectorAll(".filter-btn");

const skillCards =
document.querySelectorAll(".skill-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* REMOVE ACTIVE */

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        /* ADD ACTIVE */

        button.classList.add("active");

        /* GET CATEGORY */

        const filter =
        button.getAttribute("data-filter");

        /* FILTER CARDS */

        skillCards.forEach((card) => {

            const category =
            card.getAttribute("data-category");

            if(
                filter === "all" ||
                category === filter
            ){

                card.style.display = "block";

                gsap.fromTo(card,

                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.95
                    },

                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5
                    }

                );

            }else{

                card.style.display = "none";

            }

        });

    });

});

/* ========================= */
/* SKILLS INFO DYNAMIC */
/* ========================= */

const skillsInfoTitle =
document.querySelector(".skills-info-title");

const skillsInfoText =
document.querySelector(".skills-info-text");

const skillsData = {

    all: {

        title: "Développeuse Full Stack",

        text:
        "Je crée des expériences web modernes et performantes en combinant frontend élégant, backend robuste et design premium pour offrir des applications professionnelles et captivantes."

    },

    frontend: {

        title: "Développeuse Frontend",

        text:
        "Je conçois des interfaces web modernes, fluides et interactives avec une attention particulière à l’expérience utilisateur, l’esthétique premium et les animations élégantes."

    },

    backend: {

        title: "Développeuse Backend",

        text:
        "Je développe des systèmes backend robustes, sécurisés et évolutifs capables de gérer efficacement les données, les performances et la logique métier."

    },

    database: {

        title: "Gestion de Bases de Données",

        text:
        "Je structure et optimise les bases de données pour garantir rapidité, sécurité et fiabilité tout en assurant une excellente organisation des informations."

    },

    design: {

        title: "UI/UX & Design Créatif",

        text:
        "Je réalise des interfaces modernes et élégantes qui inspirent confiance grâce à une combinaison de design premium, hiérarchie visuelle et expérience utilisateur intuitive."

    },

    tools: {

        title: "Outils de Développement",

        text:
        "J’utilise des outils modernes comme VS Code, Git, GitHub et Netlify afin d’assurer un développement rapide, propre et professionnel."

    }

};


/* CHANGE INFO */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter =
        button.getAttribute("data-filter");

        const currentData =
        skillsData[filter];

        if(currentData){

            skillsInfoTitle.textContent =
            currentData.title;

            skillsInfoText.textContent =
            currentData.text;

        }

    });

});

/* ========================= */
/* SKILLS ANIMATION */
/* ========================= */

const premiumCards =
document.querySelectorAll(".premium-skill-card");

premiumCards.forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {

            trigger: card,
            start: "top 88%"

        },

        opacity: 0,
        y: 80,
        scale: 0.9,

        duration: 0.9,

        delay: index * 0.05,

        ease: "power3.out"

    });

});


/* ========================= */
/* PROGRESS BAR ANIMATION */
/* ========================= */

const progressBars =
document.querySelectorAll(".skill-progress-bar");

progressBars.forEach((bar) => {

    const finalWidth =
    bar.style.width || window.getComputedStyle(bar).width;

    gsap.fromTo(bar,

        {
            width: "0%"
        },

        {
            width: finalWidth,

            duration: 1.8,

            ease: "power3.out",

            scrollTrigger: {

                trigger: bar,
                start: "top 90%"

            }

        }

    );

});



/* ========================= */
/* FILTER ANIMATION */
/* ========================= */

const premiumFilterButtons =
document.querySelectorAll(".filter-btn");

const premiumSkillCards =
document.querySelectorAll(".premium-skill-card");

premiumFilterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* ACTIVE BUTTON */

        premiumFilterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        /* FILTER */

        const filter =
        button.getAttribute("data-filter");

        premiumSkillCards.forEach((card) => {

            const category =
            card.getAttribute("data-category");

            if(
                filter === "all" ||
                category === filter
            ){

                card.style.display = "block";

                gsap.fromTo(card,

                    {
                        opacity: 0,
                        y: 40,
                        scale: 0.9
                    },

                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,

                        duration: 0.5,

                        ease: "power3.out"
                    }

                );

            }else{

                card.style.display = "none";

            }

        });

    });

});
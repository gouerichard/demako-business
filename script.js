
/* ==========================================
   DEMAKO BUSINESS — SCRIPT PRINCIPAL
   ========================================== */

/* MENU MOBILE */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
    }
  });
}

/* ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* FORMULAIRE DE CONTACT — WHATSAPP */

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);

    const name = (data.get("name") || "").toString().trim();
    const business = (data.get("business") || "").toString().trim();
    const need = (data.get("need") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !need || !message) {
      alert("Merci de remplir tous les champs obligatoires.");
      return;
    }

    const whatsappMessage =
`Bonjour DEMAKO BUSINESS,

Je souhaite vous contacter pour un projet.

Nom : ${name}
Entreprise : ${business || "Non précisée"}
Besoin : ${need}

Description du projet :
${message}

Merci de me répondre dès que possible.`;

    const whatsappURL =
      "https://wa.me/2250566718445?text=" +
      encodeURIComponent(whatsappMessage);

    window.location.href = whatsappURL;
  });
}

/* ANIMATIONS AU DÉFILEMENT */

const animatedElements = document.querySelectorAll(
  ".section-head, .service-card, .portfolio-card, .price-card, .why-card, .why-cta, .testimonial-card, .method-card, .contact-card"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  animatedElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

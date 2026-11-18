
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);

    const subject = encodeURIComponent(
      "Demande de devis — DEMAKO BUSINESS"
    );

    const body = encodeURIComponent(
      `Bonjour DEMAKO BUSINESS,

Nom : ${data.get("name")}
Entreprise : ${data.get("business") || "Non précisée"}
Besoin : ${data.get("need")}

Projet :
${data.get("message")}

Merci.`
    );

    window.location.href =
      `mailto:demakobusiness@gmail.com?subject=${subject}&body=${body}`;
  });
}

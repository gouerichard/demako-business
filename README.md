# demako-business
Site officiel de DEMAKO BUSINESS
D. DEMAKO BUSINESSWEB & DIGITAL STUDIO  ☰
Services Nos offres Méthode À propos Parlons de votre projet ↗
STUDIO WEB & DIGITAL · CÔTE D’IVOIRE
Votre activité mérite
une présence remarquable.

Nous créons des sites web modernes qui valorisent votre entreprise, rassurent vos clients et facilitent les prises de contact.

Démarrer mon projet ↗ Découvrir nos services ↓
DES IDÉES CLAIRES. DES SITES SOIGNÉS.
UNE IMAGE QUI INSPIRE CONFIANCE.

votre-entreprise.ci↗
VOTRE MARQUE.
BIENVENUE CHEZ VOUS
Faites bonne
impression.
✦ DESIGN SOIGNÉ
100%ADAPTÉ AU MOBILE
D.
CRÉATION WEBREFONTE DE SITEVISIBILITÉ DIGITALEACCOMPAGNEMENT
01 / QUI SOMMES-NOUS ?
Le digital doit travailler
pour votre entreprise.

DEMAKO BUSINESS aide les entrepreneurs, commerces et organisations à présenter leur activité avec clarté et professionnalisme sur Internet.

Notre approche associe design, simplicité et utilité : un site agréable à consulter, facile à parcourir et pensé pour transformer les visiteurs en contacts.

Parlons de votre ambition ↗
02 / CE QUE NOUS FAISONS
Des solutions utiles.
Un résultat professionnel.

Une présence en ligne adaptée à votre réalité, à vos objectifs et à votre budget.

01
⌘
Création de site web

Un site vitrine clair et élégant pour présenter vos services, vos produits et vos coordonnées.

En savoir plus ↗
02
↗
Refonte & modernisation

Nous améliorons l’apparence, la navigation et l’expérience mobile de votre site existant.

En savoir plus ↗
03
◎
Présence digitale

Une présentation cohérente de votre activité, des liens de contact visibles et les bases du référencement local.

En savoir plus ↗
03 / NOS FORMULES
Choisissez votre
prochain niveau.

Des tarifs de départ indicatifs. Chaque projet reçoit un devis adapté à ses fonctionnalités et à son contenu.

POUR DÉMARRER01
START

Une présence web simple, professionnelle et efficace.

75 000FCFA à partir de
Site vitrine de 1 à 3 pages
Design adapté au mobile
Présentation de vos activités
Bouton WhatsApp et contacts
Demander un devis ↗
LE PLUS COMPLET
POUR DÉVELOPPER02
BUSINESS

Un site plus détaillé pour présenter votre offre et générer des demandes.

150 000FCFA à partir de
Site de 4 à 7 pages
Galerie ou catalogue
Formulaire de contact
Google Maps et SEO de base
Demander un devis ↗
POUR ALLER PLUS LOIN03
PREMIUM

Une expérience personnalisée avec des fonctionnalités avancées.

250 000FCFA à partir de
Site personnalisé
Catalogue avancé
Réservation ou demande de devis
Accompagnement à la prise en main
Demander un devis ↗
Les prix sont indicatifs. Le nom de domaine, l’hébergement, les abonnements et les services tiers éventuels sont à la charge du client et seront précisés dans le devis.

04 / NOTRE MÉTHODE
Simple du premier
contact à la mise en ligne.

Vous gardez une vision claire des étapes, du budget et du résultat attendu.

01
Échange & objectifs

Nous comprenons votre activité, vos clients et ce que le site doit accomplir.

02
Maquette & validation

Nous définissons la structure et l’apparence avant de passer au développement.

03
Développement

Nous construisons le site et vérifions son affichage sur téléphone et ordinateur.

04
Livraison & accompagnement

Après validation et règlement, nous préparons la mise en ligne et la prise en main.

VOTRE PROJET COMMENCE ICI
Et si votre prochain client
vous trouvait en ligne ?

Discutons de votre projet ↗
05 / CONTACT
Parlons de
votre projet.

Vous avez une entreprise à valoriser ou un site à améliorer ? Décrivez-nous votre besoin. Nous vous répondrons pour définir la prochaine étape.

EMAILdemakobusiness@gmail.com ↗WHATSAPP+225 05 66 71 84 45 ↗
ZONE D’INTERVENTIONAgnibilékrou · Côte d’Ivoire · À distance
Votre nom Nom de votre entreprise Votre besoin Parlez-nous de votre projet  Envoyer ma demande ↗
Ce formulaire prépare un message dans votre application e-mail. Aucun renseignement n’est stocké sur ce site.

D.DEMAKO BUSINESSWEB & DIGITAL STUDIO
Je donne vie à vos idées.

RETOUR EN HAUT ↑
© DEMAKO BUSINESS. Tous droits réservés.DES IDÉES QUI PRENNENT const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("Demande de devis — DEMAKO BUSINESS");
  const body = encodeURIComponent(
    `Bonjour DEMAKO BUSINESS,\n\nNom : ${data.get("name")}\nEntreprise : ${data.get("business") || "Non précisée"}\nBesoin : ${data.get("need")}\n\nProjet :\n${data.get("message")}\n\nMerci.`
  );
  window.location.href = `mailto:demakobusiness@gmail.com?subject=${subject}&body=${body}`;
});
*{box-sizing:border-box} :root{--ink:#111;--muted:#777;--paper:#f7f7f4;--yellow:#f5d629;--line:#e5e5df} html{scroll-behavior:smooth;scroll-padding-top:90px} body{margin:0;background:var(--paper);color:var(--ink);font-family:"DM Sans",sans-serif;-webkit-font-smoothing:antialiased} a{color:inherit;text-decoration:none}.container{width:min(1160px,calc(100% - 48px));margin:auto}.site-header{height:82px;background:#101010;color:white;position:sticky;top:0;z-index:20;border-bottom:1px solid #292929}.nav-wrap{height:100%;display:flex;align-items:center;justify-content:space-between}.brand{display:flex;align-items:center;gap:10px}.brand-mark{width:42px;height:42px;border:1px solid #555;display:grid;place-items:center;font:800 25px Manrope,sans-serif;letter-spacing:-3px}.brand-mark span,.brand-name b{color:var(--yellow)}.brand-name{font:800 13px Manrope,sans-serif;letter-spacing:1.3px;line-height:1.2}.brand-name small{display:block;font:500 8px "DM Sans",sans-serif;letter-spacing:2.1px;color:#999;margin-top:5px}.nav-links{display:flex;align-items:center;gap:30px;font-size:12px;color:#d2d2d2}.nav-links>a:not(.nav-cta):hover{color:var(--yellow)}.nav-cta{background:var(--yellow);color:#111;padding:13px 17px;font-weight:700}.nav-cta span,.button span{font-size:17px;margin-left:10px}.menu-toggle{display:none;background:none;border:0;color:white;font-size:24px}.hero{background:#101010;color:white;position:relative;overflow:hidden;padding:100px 0 0}.hero-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:#f5d629;filter:blur(190px);opacity:.12;right:-170px;top:-220px}.hero-grid{display:grid;grid-template-columns:1.04fr .96fr;align-items:center;gap:45px;position:relative}.eyebrow,.section-label{font-size:10px;font-weight:700;letter-spacing:2px}.eyebrow{color:#c7c7c7;display:flex;align-items:center;gap:10px}.eyebrow-dot{width:7px;height:7px;background:var(--yellow);border-radius:50%}h1,h2,h3,p{margin-top:0}h1,h2{font-family:Manrope,sans-serif;letter-spacing:-2.8px}h1{font-size:clamp(43px,5.2vw,69px);line-height:1.08;margin:26px 0 22px;font-weight:800}h1 em,h2 em{font-style:normal;color:var(--yellow)}.hero-lead{max-width:510px;color:#b8b8b8;font-size:15px;line-height:1.85}.hero-actions{display:flex;align-items:center;gap:27px;margin-top:32px}.button{display:inline-flex;align-items:center;justify-content:center;padding:16px 21px;font-size:12px;font-weight:700;border:1px solid transparent;transition:.2s}.button-yellow{background:var(--yellow);color:#111}.button-yellow:hover{background:#ffe95b;transform:translateY(-2px)}.text-link{font-size:12px;color:#ddd}.text-link span{margin-left:8px;color:var(--yellow)}.hero-proof{display:flex;gap:15px;align-items:center;margin-top:58px}.proof-line{height:1px;width:45px;background:var(--yellow)}.hero-proof p{font-size:9px;line-height:1.8;letter-spacing:1.5px;color:#888;margin:0}.hero-proof strong{color:#eee}.hero-visual{height:470px;position:relative;display:grid;place-items:center}.visual-backdrop{position:absolute;width:390px;height:390px;border:1px solid #353535;transform:rotate(45deg);border-radius:30px}.browser-card{width:min(430px,100%);background:#f6f6f2;position:relative;z-index:1;box-shadow:0 30px 80px #0008;transform:rotate(2deg)}.browser-top{height:35px;background:#e9e9e5;display:flex;align-items:center;padding:0 13px;gap:15px;color:#888;font-size:9px}.browser-top>span{flex:1;text-align:center}.browser-top>b{font-size:14px}.dots{display:flex;gap:4px}.dots i{width:6px;height:6px;background:#c2c2bd;border-radius:50%}.mock-site{height:300px;background:#fff;position:relative;overflow:hidden;color:#151515}.mock-nav{height:48px;padding:0 23px;display:flex;align-items:center;justify-content:space-between;font:800 9px Manrope;letter-spacing:1px}.mock-nav b span{color:#e6c900}.mock-nav div{display:flex;gap:9px}.mock-nav i{height:3px;width:20px;background:#ccc}.mock-content{position:absolute;z-index:2;left:28px;top:86px}.mock-kicker{font-size:7px;letter-spacing:2px;color:#777}.mock-title{font:800 36px/1.02 Manrope;letter-spacing:-2px;margin:12px 0}.mock-lines i{display:block;width:110px;height:4px;background:#e8e8e3;margin:6px 0}.mock-btn{width:82px;height:22px;background:var(--yellow);margin-top:18px}.mock-image{position:absolute;right:0;bottom:0;width:48%;height:75%;background:#d8d5c8;overflow:hidden}.mock-sun{position:absolute;width:90px;height:90px;background:#e9d67c;border-radius:50%;right:30px;top:25px}.mock-arch{position:absolute;bottom:-30px;right:15px;width:125px;height:190px;border-radius:70px 70px 0 0;background:#858477}.floating-tag{position:absolute;z-index:3;background:#fff;color:#111;padding:13px 16px;box-shadow:0 10px 30px #0004;font-size:9px;font-weight:700;letter-spacing:1px}.tag-top{top:68px;right:-10px}.tag-top span{color:#c8ac00;font-size:15px;margin-right:7px}.tag-bottom{bottom:55px;left:-8px;display:flex;align-items:center;gap:10px}.tag-bottom b{font:800 21px Manrope}.tag-bottom span{font-size:8px;color:#777}.hero-stamp{position:absolute;bottom:12px;right:25px;font:800 58px Manrope;color:#292929;letter-spacing:-8px}.hero-stamp span{color:var(--yellow)}.hero-bottom{display:flex;justify-content:space-between;border-top:1px solid #303030;margin-top:55px;padding:22px 0;color:#777;font-size:9px;letter-spacing:1.6px}.section{padding:110px 0}.intro-grid{display:grid;grid-template-columns:1fr 2fr;gap:40px}.section-label{color:#777}.intro-grid h2,.section-head h2,.method-grid h2,.contact-grid h2{font-size:clamp(34px,4vw,49px);line-height:1.14;margin:0 0 25px}.intro-grid h2 em,.section-head h2 em,.method-grid h2 em,.contact-grid h2 em{color:#b39c00}.intro-text{display:grid;grid-template-columns:1fr 1fr;gap:25px;max-width:760px}.intro-text p,.section-head>p,.method-intro,.contact-lead{font-size:14px;line-height:1.9;color:#6f6f6a}.arrow-link{display:inline-block;margin-top:18px;padding-bottom:8px;border-bottom:1px solid #aaa;font-size:12px;font-weight:700}.arrow-link span{margin-left:25px}.services-section{background:#eeeee9}.section-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:45px}.section-head h2{margin-top:18px;margin-bottom:0}.section-head>p{max-width:300px;margin-bottom:4px}.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.service-card{background:#fff;padding:30px;min-height:285px;position:relative}.service-card.featured{background:#111;color:white}.service-number{position:absolute;right:28px;top:30px;font-size:10px;color:#aaa}.service-icon{width:44px;height:44px;border:1px solid #ddd;display:grid;place-items:center;font-size:23px;margin-bottom:27px}.featured .service-icon{border-color:#555;color:var(--yellow)}.service-card h3{font:700 19px Manrope;letter-spacing:-.5px;margin-bottom:13px}.service-card p{font-size:12px;line-height:1.8;color:#777;min-height:65px}.featured p{color:#aaa}.service-card>a{display:inline-block;margin-top:15px;font-size:11px;font-weight:700}.service-card>a span{color:#b39c00;margin-left:8px}.offers-section{background:#f8f8f5}.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;align-items:stretch}.price-card{background:#fff;border:1px solid #e5e5df;padding:27px;position:relative}.price-popular{border:1px solid #c7ae00;box-shadow:0 15px 45px #0000000b}.popular-label{position:absolute;top:-12px;right:18px;background:var(--yellow);padding:6px 10px;font-size:8px;font-weight:800;letter-spacing:1px}.price-top{display:flex;justify-content:space-between;font-size:9px;letter-spacing:1.5px;color:#777}.price-index{color:#b7a000}.price-card h3{font:800 28px Manrope;letter-spacing:-1px;margin:28px 0 8px}.price-desc{font-size:11px;line-height:1.7;color:#777;min-height:40px}.price{display:flex;align-items:baseline;gap:8px;padding:20px 0;border-bottom:1px solid var(--line)}.price strong{font:800 31px Manrope;letter-spacing:-1.5px}.price>span{font-size:10px;font-weight:700}.price small{display:block;color:#999;font-size:8px;font-weight:400}.price-card ul{padding:20px 0 15px;list-style:none;margin:0;min-height:180px}.price-card li{font-size:11px;color:#555;padding:8px 0}.price-card li:before{content:"✓";color:#b39c00;font-weight:700;margin-right:10px}.button-outline{border-color:#bbb;color:#111}.button-outline:hover{border-color:#111;background:#111;color:#fff}.price-card .button{width:100%;font-size:10px}.pricing-note{font-size:10px;color:#888;line-height:1.7;margin-top:20px}.method-section{background:#151515;color:white}.method-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:90px}.method-grid .section-label{color:#999}.method-grid h2{margin-top:20px}.method-intro{color:#aaa;max-width:340px}.steps{border-top:1px solid #3a3a3a}.step{display:grid;grid-template-columns:55px 1fr;gap:15px;padding:23px 0;border-bottom:1px solid #3a3a3a}.step>span{font:700 12px Manrope;color:var(--yellow)}.step h3{font:700 16px Manrope;margin:0 0 8px}.step p{font-size:11px;line-height:1.8;color:#999;margin:0}.cta-band{background:var(--yellow);padding:60px 0}.cta-inner{display:flex;align-items:center;justify-content:space-between;gap:30px}.cta-band .section-label{color:#4b4300}.cta-band h2{font-size:clamp(30px,3.6vw,43px);line-height:1.12;margin:15px 0 0}.cta-band h2 em{color:#fff}.button-dark{background:#111;color:#fff}.button-dark:hover{background:#333;transform:translateY(-2px)}.contact-section{background:#f8f8f5}.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px}.contact-grid h2{margin-top:20px}.contact-lead{max-width:430px}.contact-details{display:grid;gap:18px;margin-top:35px}.contact-details a,.contact-details div{font-size:12px;font-weight:600}.contact-details span{display:block;font-size:8px;letter-spacing:1.6px;color:#888;margin-bottom:7px}.contact-form{background:#fff;border:1px solid #e7e7e1;padding:30px;display:flex;flex-direction:column}.contact-form label{font-size:10px;font-weight:700;margin:0 0 8px}.contact-form input,.contact-form select,.contact-form textarea{border:1px solid #e3e3dd;background:#fbfbf9;padding:13px;font:12px "DM Sans";margin-bottom:18px;outline:none;border-radius:0}.contact-form input:focus,.contact-form select:focus,.contact-form textarea:focus{border-color:#b39c00}.contact-form textarea{resize:vertical}.form-submit{cursor:pointer}.form-note{font-size:9px;line-height:1.6;color:#999;margin:12px 0 0}.footer{background:#101010;color:white;padding:35px 0 20px}.footer-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:30px;border-bottom:1px solid #303030}.footer-top>p{font:italic 14px Manrope;color:#aaa;margin:0}.back-top{font-size:9px;letter-spacing:1px;color:#aaa}.footer-bottom{display:flex;justify-content:space-between;padding-top:18px;font-size:8px;letter-spacing:1px;color:#777}.whatsapp-float{position:fixed;right:22px;bottom:22px;width:52px;height:52px;border-radius:50%;background:#20c66a;color:white;display:grid;place-items:center;font-size:27px;box-shadow:0 8px 25px #0003;z-index:15}
@media(max-width:850px){.nav-links{gap:15px}.nav-cta{padding:11px}.hero-grid{gap:15px}.hero-visual{height:400px}.browser-card{width:360px}.mock-site{height:270px}.method-grid{gap:45px}.contact-grid{gap:45px}}
@media(max-width:680px){.container{width:min(100% - 36px,540px)}.site-header{height:70px}.menu-toggle{display:block}.nav-links{display:none;position:absolute;top:70px;left:0;right:0;background:#151515;padding:20px 24px 25px;flex-direction:column;align-items:stretch;gap:20px}.nav-links.open{display:flex}.nav-cta{text-align:center}.hero{padding-top:70px}.hero-grid{grid-template-columns:1fr}.hero-copy{position:relative;z-index:2}.hero-visual{height:340px;margin-top:5px}.visual-backdrop{width:270px;height:270px}.browser-card{width:min(350px,90%)}.mock-site{height:245px}.mock-content{top:72px}.mock-title{font-size:30px}.tag-top{right:0;top:28px}.tag-bottom{left:0;bottom:28px}.hero-stamp{right:15px;bottom:0;font-size:43px}.hero-bottom{margin-top:35px;display:grid;grid-template-columns:1fr 1fr;gap:13px;font-size:8px}.section{padding:75px 0}.intro-grid,.method-grid,.contact-grid{grid-template-columns:1fr;gap:28px}.intro-text{grid-template-columns:1fr;gap:10px}.section-head{display:block}.section-head>p{margin-top:18px}.service-grid,.pricing-grid{grid-template-columns:1fr}.service-card{min-height:0}.service-card p{min-height:0}.price-card ul{min-height:0}.method-grid{gap:25px}.cta-band{padding:45px 0}.cta-inner{align-items:flex-start;flex-direction:column}.contact-grid{gap:35px}.contact-form{padding:22px}.footer-top{flex-wrap:wrap;gap:20px}.footer-top>p{order:3;width:100%}.footer-bottom{gap:15px;flex-direction:column}.whatsapp-float{width:48px;height:48px;right:15px;bottom:15px}}


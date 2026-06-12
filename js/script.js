const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const sections = document.querySelectorAll("section[id]");
const navMenuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY + 150;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navMenuLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.nav-links a[href*="#${sectionId}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

const modalCards = document.querySelectorAll(".open-modal");
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalStatus = document.getElementById("modal-status");

modalCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();

    modalTitle.innerText = this.getAttribute("data-title");
    modalDesc.innerText = this.getAttribute("data-desc");
    modalStatus.innerText = this.getAttribute("data-status");
    modal.classList.add("active");
  });
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

const contactBtn = document.getElementById("nav-contact-btn");
const contactModal = document.getElementById("contact-modal");
const closeContactBtn = document.querySelector(".close-contact");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.classList.add("active-contact");
  contactModal.classList.add("active");
});

closeContactBtn.addEventListener("click", () => {
  contactModal.classList.remove("active-contact");
  contactModal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("active-contact");
    contactModal.classList.remove("active");
  }
});

const footerContactBtn = document.querySelector(".footer-contact-link");

footerContactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.classList.add("active-contact");
  contactModal.classList.add("active");
});

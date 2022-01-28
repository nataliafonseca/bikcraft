// Ativar Links do Menu

const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Ativar Itens do Orçamento

const params = new URLSearchParams(location.search);

function activeRadio(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

params.forEach(activeRadio);

// FAQ clicável

const faq = document.querySelectorAll(".faq button");

function toggleAnswer(event) {
  const question = event.currentTarget;
  const answerId = question.getAttribute("aria-controls");
  const answer = document.getElementById(answerId);
  answer.classList.toggle("ativa");
  question.setAttribute("aria-expanded", answer.classList.contains("ativa"));
}

function faqEvents(question) {
  question.addEventListener("click", toggleAnswer);
}

faq.forEach(faqEvents);

// Galeria de Bicicletas

const gallery = document.querySelectorAll(".bicicleta-imagens img");
const galleryContainer = document.querySelector(".bicicleta-imagens");

function changeImage(event) {
  const img = event.currentTarget;
  if (matchMedia("(min-width: 1000px)").matches) {
    galleryContainer.prepend(img);
  }
}

function galleryEvents(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(galleryEvents);

// Plugin simple-anime
if (window.SimpleAnime) {
  new SimpleAnime();
}

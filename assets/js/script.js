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

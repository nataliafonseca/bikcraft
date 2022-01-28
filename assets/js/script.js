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

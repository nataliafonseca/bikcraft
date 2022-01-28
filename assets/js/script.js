const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

function scroll() {
  const windowEl = document.querySelector(".nav-container__menu-window");
  const burguerEl = document.querySelector(".nav-container__menu-burguer");
  const closeWindowEl = document.querySelector(".menu-window__close-window");
  const scroll = document.querySelector(".header-container__scroll");

  burguerEl.addEventListener("click", () => {
    windowEl.style.display = "flex";
    scroll.style.display = "none";
  });

  closeWindowEl.addEventListener("click", () => {
    windowEl.style.display = "";
    scroll.style.display = "";
  });
}

(function main() {
  // header component
  const containerNav = document.querySelector(".header-container__nav");
  headerComponent(containerNav);
  navbarListenEvent();
  
  // form component
  const containerForm = document.querySelector(".container__form");
  formComponent(containerForm);
  
  // footer component
  const containerFooter = document.querySelector(".footer");
  footerComponent(containerFooter);
  
  getHeaderContent()
  .then((headerContent) => {
    for(const h of headerContent) {
      addHeaderContent(h);
    };
  });
  
  getPresentationContent()
  .then((presentation) => {
    for (const p of presentation) {
      addPresentationContent(p);
    };
  });
  
  getServicesContent()
  .then((serv) => {
    for (const s of serv) {
      addServicesContent(s)
    };
  });
  
  scroll();
  submitForm();

})();


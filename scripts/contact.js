(function main() {
  // header component
  const containerNav = document.querySelector(".header-container__nav");
  const containerForm = document.querySelector(".container__form");
  const containerFooter = document.querySelector(".footer");
  headerComponent(containerNav);
  navbarListenEvent();
  formComponent(containerForm);
  footerComponent(containerFooter);
  submitForm();
})();
function addComponentsContact(){
  const containerNav = document.querySelector(".header-container__nav");
  headerComponent(containerNav);
  navbarListenEvent();
  const containerForm = document.querySelector(".container__form");
  formComponent(containerForm);
  submitForm();
  const containerFooter = document.querySelector(".footer");
  footerComponent(containerFooter);
}

(function main() {
  addComponentsContact();
})();
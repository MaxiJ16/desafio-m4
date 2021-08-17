function addComponent(){
  // header component
  const containerNav = document.querySelector(".header-container__nav");
  headerComponent(containerNav);
  navbarListenEvent();
  
  // form component
  const containerForm = document.querySelector(".container__form");
  formComponent(containerForm);
  submitForm();
  
  // footer component
  const containerFooter = document.querySelector(".footer");
  footerComponent(containerFooter);
}

(function main() {
  addComponent();
})();


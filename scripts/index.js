function addComponent(){
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
}

function addContent(){
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
}

(function main() {
  addComponent();
  addContent();
  submitForm();

})();


function addComponentsPortfolio(){
  const containerNav = document.querySelector(".header-container__nav");
  headerComponent(containerNav);
  navbarListenEvent();
  const containerFooter = document.querySelector(".footer");
  footerComponent(containerFooter);
}

(function main(){
  addComponentsPortfolio();
})();
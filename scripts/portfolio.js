(function main(){
  const containerNav = document.querySelector(".header-container__nav");
  const containerFooter = document.querySelector(".footer");
  headerComponent(containerNav);
  navbarListenEvent();
  footerComponent(containerFooter);

  getPortfolioContent()
  .then((por) => {
    for (const p of por) {
      console.log(p)
      addPortfolioContent(p)
    };
  });




})();
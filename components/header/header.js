function headerComponent(el) {
  const headerCompEl = document.createElement("div");
  headerCompEl.classList.add("nav-container");
  headerCompEl.innerHTML = `
    <h2 class="nav-container__logo" src="./img/logo.png" alt="logo">Maxi</h2>
    <div class="nav-container__menu">
      <img class="nav-container__menu-burguer" src="./img/burger.png" alt="burger">
      <div class="nav-container__menu-window">
        <div class="menu-window__containerX">
          <img src="./img/x.png" alt="x" class="menu-window__close-window">
        </div>
        <div class="menu-window__contents">
          <a href="./index.html"><h2 class="menu-window__contents-title">Home</h2></a>
          <a href="./portfolio.html"><h2 class="menu-window__contents-title">Portfolio</h2></a>
          <a href="./services.html"><h2 class="menu-window__contents-title">Servicios</h2></a>
          <a href="./contact.html"><h2 class="menu-window__contents-title">Contacto</h2></a>
        </div>
      </div>
    </div>
  `;

  el.appendChild(headerCompEl);
}

function navbarListenEvent() {
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



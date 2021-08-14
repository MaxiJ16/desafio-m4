function footerComponent(el) {
  const footerCompEl = document.createElement("div");
  footerCompEl.classList.add("footer__content");
  footerCompEl.innerHTML = `
    <h2 class="footer__title">Maxi</h2>
    <ul class="footer__social-link">
      <a href="https://www.instagram.com/maaxij/" class="social-link__a">Instagram <img class="social-link__img" src="./img/instagram.svg" alt="instagram"></a>
      <a href="https://www.linkedin.com/in/maximiliano-jofr%C3%A9-0b7a781a8/" class="social-link__a">Linkedin <img class="social-link__img" src="./img/linkedin.svg" alt="linkedin"></a>
      <a href="https://github.com/MaxiJ16" class="social-link__a">Github <img class="social-link__img" src="./img/Vector (2).png" alt="github"></a>
    </ul>
  `;

  el.appendChild(footerCompEl);
}
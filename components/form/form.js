function formComponent(el) {
  const formCompEl = document.createElement("div");
  formCompEl.classList.add("container-form");
  formCompEl.innerHTML = `
    <h2 class="subtitle">Escribime</h2>
    <form class="form__form">
      <div class="form__fieldset">
        <label class="fieldset__label" for="name">NOMBRE</label>
        <input class="fieldset__input" name="name" id="name" type="text" required>
      </div>
      <div class="form__fieldset">
        <label class="fieldset__label" for="email">EMAIL</label>
        <input class="fieldset__input" name="email" id="email" type="email" required>
      </div>
      <div class="form__fieldset">
        <label class="fieldset__label" for="message">Mensaje</label>
        <textarea class="fieldset__textarea" name="message" id="message"></textarea>
      </div>
      <button class="form__button">Enviar</button>
    </form>
    <div class="form__message">Enviado con éxito!</div>
  `;

  el.appendChild(formCompEl);
}

function submitForm() {
  const formEl = document.querySelector(".form__form");
  const messageEl = document.querySelector(".form__message");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "maxijofre.c@gmail.com",
        message: `
        Recibiste un mensaje de: ${value.name}.Mail: ${value.email}. Mensaje: ${value.message}`,
      }),
      
    });
    messageEl.style.display = "inherit";
    messageEl.style.color = "lime";
    formEl.reset();
  });
}
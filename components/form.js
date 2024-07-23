//CREA EL FORM Y LO AÑADE AL FINAL DEL BODY
function agregarFormulario() {
  const formEl = document.createElement("div");
  formEl.innerHTML = `
    <div class="contenedor">
      <h2 class="titulo-form">Escribime</h2>
      <form class="form">
        <div class="contenedor-nombre">
          <label class="nombre" for="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
          />
        </div>
        <div class="contenedor-email">
          <label class="email" for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
          />
        </div>
        <div class="contenedor-mensaje">
          <label class="mensaje" for="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje"></textarea>
        </div>
        <button class="btn">Enviar <img src="" /></button>
      </form>
    </div>
  </body>
  `;
  document.body.appendChild(formEl);
}

//AL ENVIAR EL FORM ME ENVIA UN MAIL CON EL MENSAJE QUE MANDAMOS
function enviarFormulario() {
  const boton = document.querySelector(".form");
  boton.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "juan.pablo.pendenza.22@gmail.com",
        message: `${e.target.mensaje.value}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}

function main() {
  agregarFormulario();
  enviarFormulario();
}
main();

function agregarCard() {
  const cardEl = document.createElement("div");
  const templateEl = document.querySelector("#template");

  cardEl.innerHTML = `
      <a class="link" href="" target="_blank" >  
        <div class="card">
          <div class="contenedor-datos-de-card">
            <img src="" class="image"/>
            <h2 class="titulo-trabajo"></h2>
            <p class="descripcion-trabajo"></p>
          </div>
        </div>
      </a>  
      `;

  templateEl.content.appendChild(cardEl);
}

function traerCards() {
  fetch(
    "https://cdn.contentful.com/spaces/y6dd6tygi6oj/environments/master/entries?access_token=wu1e-NbeNCzoZDM2rJZs7KyuT9HQHIvhkTLvF9jzQh8"
  )
    .then((res) => res.json())
    .then((data) => llenarCards(data.items));
}

function llenarCards(arr) {
  const templateEl = document.querySelector("#template");
  const contenedorTemplateEl = document.querySelector(".contenedor-trabajos");

  arr.forEach((e) => {
    if (
      e.fields.title == "Diseño" ||
      e.fields.title == "Creación" ||
      e.fields.title == "Mantenimiento"
    ) {
      return;
    } else {
      const clone = document.importNode(templateEl.content, true);

      //TENGO QUE CAMBIAR LA URL DE LOS TRABAJOS EN CONTENTFUL PARA QUE ME MUESTRE LAS FOTOS
      const image = clone.querySelector(".image");
      image.src = e.fields.src;

      const title = clone.querySelector(".titulo-trabajo");
      title.textContent = e.fields.title;
      if (title.textContent != "Programación funcional") {
        title.style.height = "40px";
      }

      const description = clone.querySelector(".descripcion-trabajo");
      description.textContent = e.fields.description;

      const link = clone.querySelector(".link");
      link.href = e.fields.url;

      contenedorTemplateEl.appendChild(clone);
    }
  });
}

function main() {
  agregarCard();
  traerCards();
}
main();

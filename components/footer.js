function agregarFooter() {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
        <div class="footer">
          <a href="../index.html"><img src="../images/mi-logo.png" class="logo" /></a>
          <div class="contenedor-pages">
            <a href="../index.html">
              <img src="../images/home.png" class="page-logo"/>
              <p class="page-nombre">Home</p>
            </a>
            <a href="../servicios.html">
              <img src="../images/profile.png" class="page-logo"/>
              <p class="page-nombre">Servicios</p>
            </a>
            <a href="../contacto.html">
              <img src="../images/telephone.png" class="page-logo"/>
              <p class="page-nombre">Contacto</p>
            </a>
          </div>
          <div class="red-social-contenedor">
            <a href="https://www.linkedin.com/in/juan-pablo-pendenza-241148291/"><img src="../images/linkedin.png" class="red-social-logo"/></a>
            <a href="https://github.com/Juanpi-git"><img src="../images/github.png" class="red-social-logo"/></a>
            <a href="https://www.instagram.com/juan.pendenza/"><img src="../images/instagram.png" class="red-social-logo"/></a>
          </div>
          <p class="texto-final">©2024 - https://apx.school</p>
        </div>
    `;
  document.body.appendChild(footerEl);
}

function main() {
  agregarFooter();
}
main();

//!Import this component in html navbar-component v1.0
//!EXAMPLE : <script src="/navbar-component"></script>
//!EXAMPLE: <navbar-component> </navbar-component>

class navbarComponent extends HTMLElement {
  constructor() {

    super();
  }
  connectedCallback
    (



  ) {
    this.innerHTML =
      `  <!---- Container Navbar-Father! ---->
      <div id="contain-navbar">
        <!---- TopBar ---->
        <div class="navbar navbar-expand-lg" id="top-bar">
          <div class="container-fluid d-flex justify-content-end align-items-center">
            <ul class="navbar-nav" id="contain-items-of-topbar">
              <li class="nav-item">
                <a class="nav-link" href="#" id="nav-link-in-topbar">Contactar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="nav-link-in-topbar">Acceso</a>
              </li>
            </ul>
          </div>
        </div>
        <!---- Import NavBar from Bootstrap ---->
        <nav class="navbar navbar-expand-lg" id="nav">
          <div class="container-fluid">
            <!---- Container IMG logos ---->
            <div class="contain-img-logos">
              <img src="/images/inventory-logo-white.png" alt="logo-white" width="120" class="logo-white" />
              <img src="/images/inventory-logo-green.png" alt="logo-green" width="120" class="logo-green" />
            </div>
            <!---- Button > Switch Mobile ---->
            <div class="d-flex justify-content-end align-items-center" id="button-mobile">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" data-bs-dismiss="offcanvasNavbar" id="btnChange">
                <img src="/images/menu.png" alt="menu" width="25"
                  data-anijs="if: click, do: bounceIn animated, to: $ancestors target | .container-box" id="icon-navbar">
              </button>
            </div>
            <!---- OFFCANVAS ---->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <!---- offcanvas-header ---->
              <div class="offcanvas-header">
                <!---- account-info  ---->
                <div id="account-info" class="d-flex align-items-center justify-content-start">
                  <!---- SPAN-CIRCLE ---->
                  <img id="span-circle" />
                  <div class="user">
                    <p id="user-name">Jhon Doe</p>
                    <p id="user-role">Administrador</p>
                  </div>
                </div>
              </div>
              <!---- offcanvas-body ---->
              <div class="offcanvas-body" id="offcanvas-body">
                <!---- nav-items ---->
                <ul class="navbar-nav">
                  <!---- nav-items Hidden Desktop-Mode---->
                  <li class="nav-item" id="nav-items-hidden">
                    <a class="nav-link" href="#">Mis Franquicias</a>
                  </li>
                  <li class="nav-item" id="nav-items-hidden">
                    <a class="nav-link" href="/branches/mobile-view.html">Mis Sucursales</a>
                  </li>
                  <!---Links HIDDEN MOBILE--->
                  <li class="nav-item" id="link-hiden-mobile">
                    <a class="nav-link" data-bs-toggle="collapse" href="#collapsed-links" role="button"
                      aria-expanded="false" aria-controls="collapseExample">
                      Mis Franquicias
                    </a>
                  </li>
                  <li class="nav-item" id="link-hiden-mobile">
                    <a class="nav-link" href="/branches/index.html" style="margin-right: 0; "> 
                      Mis Sucursales
                    </a>
                  </li>
                  <a class="nav-link" style="margin-right: 0; " id="link-hiden-mobile">|</a>
    
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#collapsed-links" role="button"
                      aria-expanded="false" aria-controls="collapseExample">
                      Mi Cuenta
                    </a>
                  </li>
                  <div class="collapse" id="collapsed-links">
                    <a href="" class="nav-link-coll">Detalles de Usuario</a>
                  </div>
                  <div class="collapse" id="collapsed-links">
                    <a href="" class="nav-link-coll">Registrar Franquicia</a>
                  </div>
                  <!---END Links Collapsed--->
                  <li class="nav-item">
                    <a class="nav-link" href="#">Acerca</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>`
  }
}
window.customElements.define("navbar-component", navbarComponent);
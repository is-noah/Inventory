//Import this component in html footer-component v1.0
//!EXAMPLE : <script src="/footer-component"></script>
//!EXAMPLE: <footer-component> </footer-component>


class footerComponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=
        `<!---- Container inventory-footer-component! ---->
        <footer>
            <!---- Section Up Footer ---->
            <section id="up-footer">
                <!---- Contain Info ---->
                <div id="contain-text-footer">
                    <div class="rect"></div>
                    <h3 class="text-start">Acerca de Nosotros</h3>
                    <h3 class="text-start">Direccion: 111 Street, Local Country, City, ST, 12345</h3>
                    <h3 class="text-start">Phone: +1 (123) - 456 - 7890</h3>
                </div>
            </section>
    
            <!---- Section Down Footer ---->
            <section id="down-footer">
                <div class="d-flex align-items-center justify-content-between w-100 flex-wrap" id="contain-text-footer">
                    <h3 class="text-wrap">DERECHOS @ 2022, AllSmart Inc. Todos los derechos reservados | Creado
                        por AllSmart Inc</h3>
                    <a href="#" class="d-flex align-items-center justify-content-center" id="link-termsandcondition">
                        <img src="/images/Terms & Conditions Alert.png" alt="" width="15" id="img-info">
                        Terms & Conditions</a>
                </div>
            </section>
        </footer>`
    }
}
window.customElements.define("footer-component" , footerComponent);
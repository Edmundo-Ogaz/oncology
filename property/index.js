
// Métodos de componente ===========================================================================
const mComp = {
	accordion(event) {
    //this.classList.toggle("active");
    event.target.classList.toggle("l-property__opened");
    event.target.classList.toggle("l-property__closed")
    var items = event.target.parentNode.nextElementSibling;
    if (items.style.display === "block") {
      items.style.display = "none";
    } else {
      items.style.display = "block";
    }
  }
};

  const tComponent = `
      <div class="l-property">
          <div class="l-property__header">
            <h2 class="l-property__title">Protocolo IA</h2>
          </div>
          <div class="l-property__accordion">
            <div class="l-property__closed" @click="accordion"></div>
            <div class="l-property__element">
              Indicaciones medicamentos
            </div>
          </div>
          <div class="l-property__items">
            <div class="l-property__item--active">Día 8 al 14</div>
            <div class="l-property__item">Día 15 al 21</div>
            <div class="l-property__item">Día 15 al 21 (Oncaspar)</div>
            <div class="l-property__item">Día 22 al 28</div>
            <div class="l-property__item">Día 22 al 28 (Oncaspar)</div>
            <div class="l-property__item">Día 29 al 33 (Oncaspar)</div>
            <div class="l-property__add">Nuevo block</div>
          </div>
          <div class="l-property__accordion">
          <div class="l-property__closed" @click="accordion"></div>
            <div class="l-property__element">
              FNH
            </div>
          </div>
          <div class="l-property__items">
          </div>
          <div class="l-property__accordion">
            <div class="l-property__closed" @click="accordion"></div>
            <div class="l-property__element">
              Exámenes
            </div>
          </div>
          <div class="l-property__items">
          </div>
          <div class="l-property__accordion">
            <div class="l-property__closed" @click="accordion"></div>
            <div class="l-property__element">
              Interconsultas
            </div>
          </div>
          <div class="l-property__items">
          </div>
          <div class="l-property__accordion">
            <div class="l-property__add">
              Nuevo grupo
            </div>
          </div>
      </div>
  `;

export const wProperty = {
  template : tComponent,
  methods		: mComp
}


  const tComponent = `
      <div class="l-indication">
        <div class="l-indication__head">
            <div class="l-indication__back"></div>
            <p class="l-indication__breadcrumb">Tratamientos Oncológicos > LLA > EsquemaTratamiento: LLA PINDA 2009 (Borrador V. 1.0)</p>
        </div>
        <hr/>
        <div class="l-indication__templates">
          <w-property></w-property>
          <div class="l-indication__contend">
            <div class="l-indication__template__head">
              <p> > Día 8 al 14</p>
              <button type="button" class="l-indication__button l-indication__button--left">Cancelar</button>
              <button type="button" class="l-indication__button l-indication__button--save">Guardar</button>
            </div>
            <hr/>
            <div class="l-indication__actions">
              <button type="button" class="l-indication__button l-indication__button--import l-indication__button--left">Importar block</button>
              <button type="button" class="l-indication__button l-indication__button--drug">Fármaco</button>
              <button type="button" class="l-indication__button l-indication__button--fleboclisis">Fleboclisis</button>
              <button type="button" class="l-indication__button l-indication__button--laboratory">Laboratorio/UMT</button>
              <button type="button" class="l-indication__button l-indication__button--process">Procedimientos</button>
              <button type="button" class="l-indication__button l-indication__button--consultation">Interconsultas</button>
              <button type="button" class="l-indication__button l-indication__button--other">Otras indicaciones</button>
            </div>
            <div class="l-indication__rows">
            <div class="l-indication__move">MOVER</div>
              <w-row></w-row>
              <w-row></w-row>
              <w-row></w-row>
              <w-row></w-row>
              <w-row></w-row>
            </div>
          </div>
        </div>
      </div>
  `;

export const wIndication = {
  template : tComponent
}

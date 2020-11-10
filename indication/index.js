
  const tComponent = `
      <div class="l-indication">
        <div class="l-indication__head">
            <div class="l-indication__back"></div>
            <p>Tratamientos Oncológicos > LLA > EsquemaTratamiento: LLA PINDA 2009 (Borrador V. 1.0)</p>
        </div>
        <div class="l-indication__templates">
          <w-property></w-property>
          <div class="l-indication__contend">
            <div class="l-indication__template__head">
              <p> > Día 8 al 14</p>
              <button type="button" class="l-indicaton__button l-indication__button--left">Cancelar</button>
              <button type="button" class="l-indicaton__button l-indication__button--save">Guardar</button>
            </div>
            <div class="l-indicatin__actions">
              <button type="button" class="l-indicaton__button l-indication__button--left">Inportar block</button>
              <button type="button" class="l-indicaton__button">Farmaco</button>
              <button type="button" class="l-indicaton__button">Fleboclisis</button>
              <button type="button" class="l-indicaton__button">Laboratorio/UMT</button>
              <button type="button" class="l-indicaton__button">Procedimientos</button>
              <button type="button" class="l-indicaton__button">Interconsultas</button>
              <button type="button" class="l-indicaton__button">Otras indicaciones</button>
            </div>
            <div class="l-indication__rows">
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
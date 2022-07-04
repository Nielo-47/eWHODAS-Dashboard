import React from "react";
import "./indicador.css";

function Indicador({ titulo, valor, crescimento }) {
  return (
    <div className="molduraExternaIndicador">
      <div className="tituloIndicador">{titulo}</div>
      <div className="progressaoIndicador">
        <div className="molduraInternaIndicador">
          <div className="valoresIndicador">
            <div classname="periodoIndicador">Hoje</div>
            <div className="valorIndicador">{valor}</div>
          </div>
          <div className="divisorIndicador" />
          <div className="sessaoCrescimentoIndicador">
            <div className="comparacaoIndicador">
              Crescimento em relação a ontem
            </div>
            <div
              className="crescimentoIndicador"
              style={{ color: crescimento > 0 ? "#26D62D" : "#FF0000" }}
            >
              {crescimento > 0 ? "↑" : "↓"}
              {Math.abs(crescimento)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indicador;

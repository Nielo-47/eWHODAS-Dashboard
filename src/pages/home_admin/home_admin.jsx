import React from "react";
import Indicador from "./components/indicador/indicador";
import "./home_admin.css";

function HomeAdmin() {
  return (
    <div className="gridIndicadores">
      <Indicador titulo="Novo cadastros" valor={10} crescimento={-5} />
      <Indicador titulo="Acessos" valor={23} crescimento={3} />
      <Indicador titulo="Novos pacientes" valor={8} crescimento={-15} />
      <Indicador titulo="Exames realizados" valor={10} crescimento={-51} />
      <Indicador titulo="Contas deletadas" valor={2} crescimento={10} />
      <Indicador titulo="Pacientes deletados" valor={4} crescimento={-13} />
    </div>
  );
}

export default HomeAdmin;

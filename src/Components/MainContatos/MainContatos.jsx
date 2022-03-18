import React from "react";
import TituloCadastro from "../TituloCadastro/TituloCadastro";
import TabelaContatos from "./TabelaContatos/TabelaContatos";

export default () => {
  return(
      
      <main className="pt-4">
        <TituloCadastro titulo={"Cadastro de cliente"} nomeBotao={"Novo cliente"}/> <TabelaContatos/>
      </main>
  );
}
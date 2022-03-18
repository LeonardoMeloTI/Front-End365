import React from "react";
import './Footer.css'

export default (props) => {
  return(
      <footer className="footer mb-3 center">
        <div className="text-center">
          <h2 className="font-config">Temos a melhor opção de escolha</h2>
          <img className="cartoes" src={props.fotoCartoes} alt="Forma de pagamento" />
        </div>
      </footer>
  );
}
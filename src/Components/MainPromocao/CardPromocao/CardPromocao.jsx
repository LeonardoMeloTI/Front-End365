import React from "react";
import './CardPromocao.css';

export default(props) => {
   
    let dataEmbarque;
    let origem  = "Rio de janeiro";
    let destino = props.destino;
    let preco;
    
    switch(destino){
      case "Egito":
        origem  = "Rio de janeiro";
        dataEmbarque = "28/03/2022 10:00";
        preco = "4000,00";
        break;
      case "Guatemala":
        origem  = "Rio de janeiro";
        dataEmbarque = "29/03/2022 12:00";
        preco = "2200,00";
        break;
      case "Guatemala":
        origem  = "Rio de janeiro";
        dataEmbarque = "30/03/2022 09:00";
        preco = "2200,00";
        break;
      case "Egito":
        origem  = "Rio de janeiro";
        dataEmbarque = "02/03/2022 09:30";
        preco = "4000,00";
        break;
      case "Guatemala":
        origem  = "Rio de janeiro";
        dataEmbarque = "20/03/2022 22:00";
        preco = "2200,00";
        break;
      case "Costarica":
        origem  = "Rio de janeiro";
        dataEmbarque = "27/03/2022 07:45";
        preco = "3000,00";
        break;
      case "Egito":
        origem  = "Rio de janeiro";
        dataEmbarque = "14/03/2022 14:20";
        preco = "4000,00";
        break;
      case "Guatemala":
        origem  = "Rio de janeiro";
        dataEmbarque = "25/02/2022 13:15";
        preco = "3600,00";
        break;
      case "Guatemala":
        origem  = "Rio de janeiro";
        dataEmbarque = "08/03/2022 17:40";
        preco = "2200,00";
        break;
      case "Costarica":
        origem  = "Rio de janeiro";
        dataEmbarque = "12/03/2022 22:00";
        preco = "3000,00";
        break;
      case "Egito":
        origem  = "Rio de janeiro";
        dataEmbarque = "09/03/2022 23:00";
        preco = "4000,00";
        break;
    }
  return(
    <>
      <div className="card-promocao font-config">
        <div className="foto-promocao">
          <img class="imagem" src= {props.fotoPromocao} alt="Foto da promoção" />
        </div>
        <section>

          <h3 className="text-center">{props.origem}</h3>
          <p> Origem da cidade: {"Rio de janeiro"}</p>
        </section>
        <section>
          <h3 className="text-center">{props.destino}</h3>
          <p>Data da viagem: {dataEmbarque}</p>
        </section>

        <section className="preco">
          <h3>R$ {preco}</h3>
          <a role="button" href="#">Comprar</a>
        </section>
      </div>

      
    </>
    
  );
}
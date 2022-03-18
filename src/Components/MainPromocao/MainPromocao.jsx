import React from "react";
import './MainPromocao.css';
import CardPromocao from "./CardPromocao/CardPromocao";
import Mexico from "../../assets/img/mexico.jpg";
import Republica from "../../assets/img/republica.jpg";
import Portugal from "../../assets/img/portugal.jpg";
import Espanha from "../../assets/img/espanha.jpg";
import Italia from "../../assets/img/italia.jpg";
import Nicaragua from "../../assets/img/nicaragua.jpg";
import Grecia from "../../assets/img/grecia.jpg";
import Alemanha from "../../assets/img/alemanha.jpg";
import Guatemala from "../../assets/img/guatemala.jpg";
import Costarica from "../../assets/img/costarica.jpg";
import Egito from "../../assets/img/egito.jpg";


export default () =>{
  return(
    <main className="pb-3 mt-3">
        <section className="container-fluid mb-2 text-center">
          <h1 className="font-config">Promoções</h1>
        </section>
        <div className="tela-promocao">
          <CardPromocao destino= {"Egito"} fotoPromocao={Egito}/>
          <CardPromocao destino= {"Guatemala"} fotoPromocao={Guatemala}/>
          <CardPromocao destino= {"Costarica"} fotoPromocao={Costarica}/>
          <CardPromocao destino= {"Guatemala"} fotoPromocao={Guatemala}/>
          <CardPromocao destino= {"Egito"} fotoPromocao={Egito}/>
          <CardPromocao destino= {"Costarica"} fotoPromocao={Costarica}/>
          <CardPromocao destino= {"Egito"} fotoPromocao={Egito}/>
          <CardPromocao destino= {"Guatemala"} fotoPromocao={Guatemala}/>
          <CardPromocao destino= {"Guatemala"} fotoPromocao={Guatemala}/>
          <CardPromocao destino= {"Costarica"} fotoPromocao={Costarica}/>
          <CardPromocao destino= {"Egito"} fotoPromocao={Egito}/>
        </div>
      </main>
  );
}

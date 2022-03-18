import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from '../../assets/img/Logo.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainPromocao from "../../Components/MainPromocao/MainPromocao";

export default () =>{
  return(
    <>
      <Navbar Logo={Logo}/>

      <MainPromocao/>

      <Footer fotoCartoes={cartoes}/>
    </>
  );
}
import React from "react";
import { useState } from 'react';
import './TabelaContatos.css';

function TabelaContatos() {


function enviarmensagem() {
  alert('Mensagem enviada, aguarde que vamos te responder em breve.')
  console.log('mensagem enviada')
  console.log(`nome: ${name}, cpf: ${cpf}, cartao: ${cartao}, telefone: ${telefone}, email: ${email}, destino: ${destino}`)
}

const [name, setName] = useState();
const [cpf, setcpf] = useState();
const [cartao, setcartao] = useState();
const [telefone, settelfone] = useState();
const [email, setemail] = useState();
const [destino, setdestino] = useState();

  return(
    <>
    <div className="tabela-cadastro mt-4 mb-4 table-responsive">
     <section id="section-form">
        <h2>Dados pessoais</h2>
          <div className="form-container container">
        <form onSubmit={enviarmensagem} className='form'>
            <div class="mb-3">
              <label htmlFor="name" class="form-label">Nome</label>
              <input type="text" class="form-control" id="name" placeholder="Digite seu nome"/>
            </div>
            <div class="mb-3">
              <label htmlFor="cpf" class="form-label">CPF</label>
              <input type="text" class="form-control" id="cpf" placeholder="Digite o seu cpf" />
            </div>
            <div class="mb-3">
              <label htmlFor="cartao" class="form-label">Cartão de crédito</label>
              <input type="email" class="form-control" id="cartao" placeholder="Número do seu cartão"/>
            </div>
            <div class="mb-3">
              <label htmlFor="telefone" class="form-label">Telefone</label>
              <input type="email" class="form-control" id="telefone" placeholder="Número do seu celular"/>
            </div>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Digite seu name@example.com"/>
            </div>
            <div class="mb-3">
              <label htmlFor="destino" class="form-label">Destino</label>
              <input type="email" class="form-control" id="destino" placeholder="Qual local de destino"/>
            </div>
            <div className="action">
              <button type="submit" className='btn'>Enviar</button>
            </div>
          </form>
            </div>
      </section>

      <div className="tabela-cadastro mt-4 mb-4 table-responsive">
          <table className="tabela">
              <tr>
                <th className="th">cliente</th>
                <th className="th">cpf</th>
                <th className="th">cartão de crédito</th>
                <th className="th">Telefone</th>
                <th className="th">email</th>
                <th className="th">destino</th>
              </tr>
              <td>Leonardo</td>
                <td>14078954451</td>
                <td>1111111111111111</td>
                <td>21 991736543</td>
                <td>leko@gmail.com</td>
                <td>Rio de janeiro</td>
          </table>
      </div>
          <div className="wall">
                  <a className="btn btn-cadastro" role="button" href="#">Editar</a>
                  <a className="btn btn-cadastro" role="button" href="#">Visualizar</a>
                  <a className="btn btn-cadastro" role="button" href="#">Deletar</a>
          </div>
    </div>
    </>
  );
}
export default TabelaContatos;
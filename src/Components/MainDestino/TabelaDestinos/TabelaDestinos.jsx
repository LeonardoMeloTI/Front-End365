import React from "react";
import './TabelaDestinos.css';


export default () => {
  return(
      <div className="tabela-cadastro mt-4 mb-4 table-responsive">

        <table className="table table-sm table-borderless table-hover">
            <thead>
                <tr>
                    <th>
                        Destino
                    </th>
                    <th>
                        Preço
                    </th>
                    <th>
                        Embarque
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
      
              <tr>
                  <td>
                      México
                  </td>
                  <td>
                      R$2100,00
                  </td>
                  <td>
                      11/01/2022 09:00
                  </td>
                  <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Visualizar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Deletar</a>
                  </td>  
              </tr>

              <tr>
                  <td>
                      Portugal
                  </td>
                  <td>
                      R$3500,00
                  </td>
                  <td>
                      27/01/2022 13:00
                  </td>
                  <td>
                      <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                      <a className="btn btn-cadastro" role="button" href="#">Visualizar</a>
                      <a className="btn btn-cadastro" role="button" href="#">Deletar</a>
                  </td>
                
              </tr>

              <tr>
                <td>
                    França
                </td>
                <td>
                    R$3355,50
                </td>
                <td>
                    11/02/2022 10:30
                </td>
                <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Visualizar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Deletar</a>
                </td>
            
              </tr>

              <tr>
                <td>
                    Grécia
                </td>
                <td>
                    R$4500,00
                </td>
                <td>
                    21/02/2022 09:30
                </td>
                <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Visualizar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Deletar</a>
                </td>
              
              </tr>

            </tbody>
        </table>
    
      </div>
  );
}
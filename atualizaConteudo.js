'use strict'

const containerConteudo = document.getElementById('clientes');

const consultaCliente = document.getElementById('consultarCliente');

const chamaCliente = document.getElementById('index-cliente');

const relatorios = document.getElementById('relatorios');

const cmsLink = document.getElementById('cms');

const chamaRelatorio = document.getElementById('index-relatorio');


/*SEÇÃO DE ATUALIZAR O RELATÓRIO*/

const chamaSelect = document.getElementById('chamaSelect');

const chamaDiaria = document.getElementById('chamaDiaria');

const chamaMensal = document.getElementById('chamaMensal');

const chamaAnual = document.getElementById('chamaAnual');

const chamaCms = document.getElementById('index-cms');


function consulta() {
    
    chamaRelatorio.style.display = 'none';
    chamaCms.style.display = 'none';
    chamaCliente.style.display = 'block';
    
}


function relatorio() {
    
   chamaCliente.style.display = 'none';  
    chamaCms.style.display = 'none';
   chamaRelatorio.style.display = 'block';
} 

function cms() {
    
    chamaCliente.style.display = 'none';
    chamaRelatorio.style.display = 'none';
    chamaCms.style.display = 'block';
}

function mudarRelatorio() {
    
    const chamaDiaria = document.getElementById('chamaDiaria');
    const chamaMensal = document.getElementById('chamaMensal');
    const chamaAnual = document.getElementById('chamaAnual');
 
    const chamaSelect = document.getElementById('chamaSelect');
   
    let containerRelatorio = document.getElementById('segura-tblRelatorio');
    
    
    if (chamaSelect.value = 'Diaria')
        {
            chamaMensal.style.display = 'none';
            chamaAnual.style.display = 'none';
    
    containerRelatorio.innerHTML = `
            
                <div id="caixa-informacoes-importantes">
                    <table id="tblInformacoes-importantes">
                        <tr class="tr-relacao">
                            <td class="td-relacao">Dia: 21/12/2020</td>
                        </tr>
                    </table>
                </div>

                <table id="tblRelatorio" class="centerObject">
                    <tr class="tr-relatorio">
                        <td class="td-titulo">ID</td>
                        <td class="td-titulo">Nome</td>
                        <td class="td-titulo">Placa</td>
                        <td class="td-titulo">Cor</td>
                        <td class="td-titulo">Hora Total</td>
                        <td class="td-titulo">Valor Pago</td>
                        <td class="td-titulo">Ticket</td>
                    </tr>
                    <tr class="tr-relatorio">
                        <td class="td-relatorio">1</td>
                        <td class="td-relatorio">Alencar Teixeira Rodrigues Fagundes</td>
                        <td class="td-relatorio">CUA-1278</td>
                        <td class="td-relatorio">Amarelo</td>
                        <td class="td-relatorio">1:50:57</td>
                        <td class="td-relatorio">R$20</td>
                        <td class="td-relatorio">
                            <div id="button-comprovante">
                                <input type="button" name="btnCadastrar" value="Gerar Ticket" class="gerar-ticket">
                            </div>
                        </td>
                    </tr>
                    <tr class="tr-relatorio">
                        <td class="td-relatorio">2</td>
                        <td class="td-relatorio"></td>
                        <td class="td-relatorio"></td>
                        <td class="td-relatorio"></td>
                        <td class="td-relatorio"></td>
                        <td class="td-relatorio"></td>
                        <td class="td-relatorio"></td>
                    </tr>
                </table>
                <div id="caixa-informacoes-importantes">
                    <table id="tblInformacoes-importantes">
                        <tr class="tr-relacao">
                            <td class="td-relacao">Valor Total Do Dia :</td>
                            <td class="td-relacao">R$2500.50</td>
                        </tr>
                        <tr class="tr-relacao">
                            <td class="td-relacao">Qtdes de Carros Dia :</td>
                            <td class="td-relacao">50 Carros</td>
                        </tr>
                    </table>
                </div>

            </div>

    `;
        }
    
    if ( chamaSelect.value = 'Mensal')
    {
        chamaDiaria.style.display = 'none';
        chamaAnual.style.display = 'none';
        
    containerRelatorio.innerHTML = `
            <div class="container-relatorios">
                <div class="container-comprovante centerObject">
                    <div id="comprovante-text">
                        <i class="far fa-check-circle icon-check"></i>
                        <h2>Relatório</h2>
                        <p>Agora você pode gerar Comprovantes</p>
                    </div>
                    <div class="campoRelatorio centerObject">
                        <select id="chamaSelect" onchange="mudarRelatorio();">
                            <option>Tipo de Relatório</option>
                            <option value="Diaria">Diaria</option>
                            <option value="Mensal">Mensal</option>
                            <option value="Anual">Anual</option>
                        </select>
                    </div>
                </div>


                <div id="segura-tblRelatorio">
                    <table id="tblRelatorio" class="centerObject">
                        <tr class="tr-relatorio">
                            <td class="td-titulo">ID</td>
                            <td class="td-titulo">Nome</td>
                            <td class="td-titulo">Placa</td>
                            <td class="td-titulo">Cor</td>
                            <td class="td-titulo">Meses</td>
                            <td class="td-titulo">Hora Total</td>
                            <td class="td-titulo">Valor Pago</td>
                            <td class="td-titulo">Ticket</td>
                        </tr>


                    </table>
                    <div id="caixa-informacoes-importantes">
                        <table id="tblInformacoes-importantes">
                            <tr class="tr-relacao">
                                <td class="td-relacao">Valor Total Do Dia :</td>
                                <td class="td-relacao"></td>
                            </tr>
                            <tr class="tr-relacao">
                                <td class="td-relacao">Qtdes de Carros Dia :</td>
                                <td class="td-relacao"></td>
                            </tr>
                        </table>
                    </div>
                </div>



            `;
    }
    
    if ( chamaSelect.value = 'Anual')
        {
            chamaDiaria.style.display = 'none';
            chamaMensal.style.display = 'none';
            
        containerRelatorio.innerHTML = `
                    <div id="caixa-informacoes-importantes">
                        <table id="tblInformacoes-importantes">
                            <tr class="tr-relacao">
                                <td class="td-relacao">Ano: 2020</td>
                            </tr>
                        </table>
                    </div>
        
                    <table id="tblRelatorio" class="centerObject">
                        <tr class="tr-relatorio">
                            <td class="td-titulo">ID</td>
                            <td class="td-titulo">Ano</td>
                            <td class="td-titulo">Qtde de Clientes</td>
                            <td class="td-titulo">Valor Total</td>
                        </tr>
                        <tr class="tr-relatorio">
                            <td class="td-relatorio">1</td>
                            <td class="td-relatorio">Alencar Teixeira Rodrigues Fagundes</td>
                            <td class="td-relatorio">CUA-1278</td>
                            <td class="td-relatorio">Amarelo</td>
                                <div id="button-comprovante">
                                    <input type="button" name="btnCadastrar" value="Gerar Ticket" class="gerar-ticket">
                                </div>
                            </td>
                        </tr>
                        <tr class="tr-relatorio">
                            <td class="td-relatorio">2</td>
                            <td class="td-relatorio"></td>
                            <td class="td-relatorio"></td>
                            <td class="td-relatorio"></td>
                        </tr>                        
                    </table>
            `;
         }
    
}



chamaSelect.addEventListener('change', mudarRelatorio);
consultarCliente.addEventListener('click', consulta);
relatorios.addEventListener('click', relatorio);
cmsLink.addEventListener('click', cms);



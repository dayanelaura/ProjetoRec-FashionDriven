let ultimoPedido;
let nomeInicio;
let model_escolhido;
let neck_escolhido;  
let material_escolhido;

function relogar(){
    window.location.reload();
}

function addBorda(elemento){
    let selecao = elemento.parentElement.querySelector(".selecionado");

    if (selecao !== null) {
        selecao.classList.remove('selecionado');
    }

    elemento.classList.add("selecionado");

    verificaInput();
    // ativarBotao();
}

function escolherModelo(elemento, modelo){
    model_escolhido = modelo;
    addBorda(elemento);
}

function escolherGola(elemento, gola){
    neck_escolhido = gola;
    addBorda(elemento);
}
function escolherTecido(elemento, tecido){
    material_escolhido = tecido;
    addBorda(elemento);
}

let urldaimg;
function verificaInput(){
    urldaimg = document.querySelector("input").value;
    ativarBotao();
}

function ativarBotao(){

    let botao_ativado = document.querySelector("button"); 

    if(urldaimg !== '' && model_escolhido !== undefined && neck_escolhido !== undefined && material_escolhido !== undefined){ 
        botao_ativado.classList.add("botaoroxo");
    }

    enviarEncomenda();
}






iniciarEncomenda();

function iniciarEncomenda(){
    nomeInicio = prompt("Digite seu nome:");

    const promise = axios.get("https:ck-api.driven.com.br/api/v4/shirts-api/shirts");
    promise.then(atualizaPedidos);
}

function atualizaPedidos(resposta){
    // console.log(resposta);
    Pedidos = resposta.data;
}

function renderizarPedidos(Pedidos){
    let tam = Pedidos.length - 10;
    let ultimosPedidos = document.querySelector(".sugestoes"); 

    for(i=Pedidos.length; i > tam; i--){        
        layout = `
        <div onclick="confirmarEncomenda(this, `${Pedidos[i]}`)">
            <img src="${Pedidos[i].image}">
            <p><bold>Criador:</bold> ${Pedidos[i].author}</p>
        </div>`;

        ultimosPedidos.innerHTML += layout;
    }
}

function enviarEncomenda(element){

    ultimoPedido = {
        model: `${model_escolhido}`,
        neck: `${neck_escolhido}`,
        material: `${material_escolhido}`,
        image: `${urldaimg}`,
        owner: `${nomeInicio}`,
        author: `${nomeInicio}`
    }

    let requisicao = axios.post("https:mock-api.driven.com.br/api/v6/uol/messages", ultimoPedido);
//  document.querySelector("input").value = "";

    requisicao.then(alert("Encomenda confirmada!"));
    requisicao.catch(alert("Ops, não conseguimos processar sua encomenda"));

}

function confirmarEncomenda(element, objeto){
    confirm("Confirma a solicitação dessa encomenda?");
    result ? 
}
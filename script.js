let ultimoPedido;
let nomeInicio;
let model_escolhido;
let neck_escolhido;  
let material_escolhido;
let urldaimg;
let layout;
const API_URL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";

function refresh(){
    window.location.reload();
}

iniciarEncomenda();

function iniciarEncomenda(){
    nomeInicio = "Dayane";

    const promise = axios.get(API_URL);
    promise.then((resposta) => renderizarPedidos(resposta.data));
}

function renderizarPedidos(Pedidos){
    let ultimosPedidos = document.querySelector(".sugestoes"); 

    Pedidos.map((pedido) => {
        layout = `
        <div class="opcoesprontas" onclick="confirmarEncomenda(this, ${pedido})">
            <img src="${pedido.image}">
            <p><strong>Criador:</strong> ${pedido.owner}</p>
        </div>`;
        
        ultimosPedidos.innerHTML += layout;
    })

}

function addBorda(elemento){
    let selecao = elemento.parentElement.querySelector(".selecionado");

    if (selecao !== null)
    selecao.classList.remove('selecionado');

    elemento.classList.add("selecionado");

    verificaInput(urldaimg);
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

function verificaInput(element){
    urldaimg = element;

    if (urldaimg !== undefined)
        ativarBotao();
} 

function ativarBotao(){
    let botao_ativado = document.querySelector("button"); 

    if(model_escolhido !== undefined && neck_escolhido !== undefined && material_escolhido !== undefined){ 
        botao_ativado.classList.add("botaoroxo");
        botao_ativado.disabled = false;
    }
}

function enviarEncomenda(){

    urldaimg = document.querySelector("input").value;

    ultimoPedido = {
        model: `${model_escolhido}`,
        neck: `${neck_escolhido}`,
        material: `${material_escolhido}`,
        image: `${urldaimg}`,
        owner: `${nomeInicio}`,
        author: `${nomeInicio}`
    }

    let requisicao = axios.post(API_URL, ultimoPedido);
    let resposta = requisicao.then((resp) => alert("Encomenda confirmada!"));
    requisicao.catch( (erro) => alert("Ops, não conseguimos processar sua encomenda"));

    setInterval(refresh, 2000);
}

function confirmarEncomenda(elemento, selecao){

    ultimoPedido = {
        model: selecao.model,
        neck: selecao.neck,
        material: selecao.material,
        image: selecao.image,
        owner: selecao.owner,
        author: `${nomeInicio}`
    }
    
    const result = confirm("Pressione OK para confirmar essa compra");

    if (result == true){
        let requisicao = axios.post(API_URL, ultimoPedido);
        let resposta = requisicao.then((resp) => alert("Encomenda confirmada!"));
        requisicao.catch( (erro) => alert("Ops, não conseguimos processar sua encomenda"));

        setInterval(refresh, 2000);
    }else{
        refresh();
    }
}
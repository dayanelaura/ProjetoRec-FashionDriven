// let ultimoPedido;
// let nomeInicio;

// function relogar(){
//     window.location.reload();
// }

// iniciarEncomenda();

// function iniciarEncomenda(){
//     nomeInicio = prompt("Digite seu nome:");
//     const promessa = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
// }

// function buscarPedidos(){
//     const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
//     promise.then(recebePedidos);
// }

// function recebePedidos(resposta){
//     console.log(resposta);
//     Pedidos = resposta.data;
// }

// function renderizarPedidos(Pedidos){

//     let tam = Pedidos.length - 10;
//     let ultimosPedidos = document.querySelector(".sugestoes"); 

//     for(i=Pedidos.length; i > tam; i--){        
//         layout = `
//         <div onclick="confirmarPedido(this)">
//             <img src="${Pedidos[i].image}">
//             <p><bold>Criador:</bold> ${Pedidos[i].author}</p>
//         </div>`;

//         ultimosPedidos.innerHTML += layout;
//     }

// }

// function enviarEncomenda(element){
    
//     let model_escolhido = element.document.querySelector(".valordomodelo").value;
//     let neck_escolhido = element.document.querySelector(".valordagola").value;
//     let material_escolhido = element.document.querySelector(".valordotecido").value;

//     let ultimoPedido =  {
//             model: `${model_escolhido}`,
//             neck: `${neck_escolhido}`,
//             material: `${material_escolhido}`,
//             image: `${document.querySelector("input").value}`,
//             owner: `${nomeInicio}`,
//             author: `${nomeInicio}`
//         }

//     let requisicao = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", ultimoPedido);
//     document.querySelector("input").value = "";

//     requisicao.then(alert("Encomenda confirmada!"));
//     requisicao.catch(alert("Ops, não conseguimos processar sua encomenda"));

// }

function escolherModelo(elemento, modelo){
    console.log(modelo, elemento);
}
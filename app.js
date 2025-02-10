//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo () {
    let amigoEscolhido = document.querySelector('input').value.trim();
    if (amigoEscolhido == '') {
        alert('Por favor, insira um nome.');
    } else {    
            
            if (listaAmigos.includes(amigoEscolhido)) {
                alert('Amigo já está na lista');
            } else {
                listaAmigos.push(amigoEscolhido);
                console.log(listaAmigos);
            }
            limparCampo();
            atualizarLista();                      
        }
}

function limparCampo() {
    amigoEscolhido = document.querySelector('input');
    amigoEscolhido.value = '';
}

function atualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of listaAmigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert('Adicione seus amigos antes de sortear.');
    } else {
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceSorteado];

        let resultadoAmigo = document.getElementById('resultado');
        resultadoAmigo.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    }
}

function novoSorteio() {
    location.reload();
}
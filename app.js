// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Os códigos acima tem o mesmo propósito da função abaixo, porém a função é
// mais prática.
// VV VV VV VV VV VV VV VV VV
let listaDeSorteados = [];
let numeroLimite = 10;
let numeroSecreto = 2;
let tentativas = 1;


function textoTela(tag, texto){
   let campo = document.querySelector(tag);  // document = index.html - vai no documento e .querySelector seleciona esse elemento ('elemento').
   campo.innerHTML = texto;  // innertHTML - dentro do HTML
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirTexto(){
    textoTela('h1', 'Jogo do Chute');
    textoTela('p', 'Escolha um número entre 1 e 10');
}

exibirTexto();


 function verificarChute(){
   let chute = document.querySelector('input').value; // Vai puxar apenas o value inserido no campo
                                                // caso colocado um console.log igualando o chute com o numeroSecreto, o retorno vai ser em boolean, verdadeiro ou falso  
    if(chute == numeroSecreto){
      textoTela('h1','Parabéns, você acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
      let mensagemTentativa = `Você acertou com ${tentativas} ${palavraTentativa}`
      textoTela('p',mensagemTentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
          textoTela('p', 'O número é menor.');
        } else{
          textoTela('p','O número é maior.');
        } tentativas++;
        limparCampo();
    }
};



 function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeSorteados = [];
   }
   if(listaDeSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
   } else {
      listaDeSorteados.push(numeroEscolhido);      // adiciona um item ao fim da lista
      console.log(listaDeSorteados);
      return numeroEscolhido;
   }
 }

 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
 }

 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTexto();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }
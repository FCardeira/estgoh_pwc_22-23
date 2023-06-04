function realizarJogada(jogada) {
  const jogadas = ["pedra", "papel", "tesoura"];
  const numAleartorio = geraNumeroAleatório(0, jogadas.length);
  const jogadaComputador = jogadas[numAleartorio];

  const resultadoJogada = {
    jogadaCPU: jogadaComputador,
    resultado: getResultado(jogada, jogadaComputador),
  };

  atualizaPontuacao(resultadoJogada.resultado);

  return resultadoJogada;
}

function getResultado(jogada, jogadaComputador) {
  if (jogada === jogadaComputador) {
    return "Empate 🤝";
  }

  switch (jogada) {
    case "pedra":
      if (jogadaComputador === "papel") {
        return "Perdeste 🙁";
      }
      break;
    case "papel":
      if (jogadaComputador === "tesoura") {
        return "Perdeste 🙁";
      }
      break;
    case "tesoura":
      if (jogadaComputador === "pedra") {
        return "Perdeste 🙁";
      }
      break;
  }
  return "Ganhaste 🎉";
}
// Atualiza a pontuação na página
function atualizaPontuacao(resultado) {
  //Obter pontuação do localStorage
  var pontuacao = getPontuacaoFromLocalStorage();

  if(resultado === "Ganhaste 🎉") {
    pontuacao.vitorias++;
  } else if(resultado === "Perdeste 🙁") {
    pontuacao.derrotas++;
  } else if(resultado === "Empate 🤝") {
    pontuacao.empates++;
  }

  //Apresentar pontuação na página
  refreshPontuacao(pontuacao);

  //Guardar pontuação no localStorage
  setPontuacaoToLocalStorage(pontuacao);

}

function getPontuacaoFromLocalStorage() {
  var pontuacao = JSON.parse(localStorage.getItem("pontuacao"));

  if(pontuacao === null) {
    pontuacao = {
      vitorias: 0,
      empates: 0,
      derrotas: 0
    }
  }

  return pontuacao;
}

function setPontuacaoToLocalStorage(pontuacao) {
  localStorage.setItem("pontuacao", JSON.stringify(pontuacao));
}

function refreshPontuacao(pontuacao) {
  document.getElementById("vitorias").innerHTML = pontuacao.vitorias;
  document.getElementById("empates").innerHTML = pontuacao.empates;
  document.getElementById("derrotas").innerHTML = pontuacao.derrotas;
}

function geraNumeroAleatório(min, max) {
  return min + Math.floor(Math.random() * max);
}

function textToEmoji(text) {
  switch (text) {
    case "pedra":
      return "👊";
    case "papel":
      return "✋";
    case "tesoura":
      return "✌️";
  }
}

function onClickButton(evt) {
  // Separa o id do botão para obter a jogada (ex: botao_pedra -> pedra)
  const jogada = evt.target.id.split("_")[1];

  const resultado = realizarJogada(jogada);

  const elementoHTMLResultado = document.getElementById("resultado");

  elementoHTMLResultado.innerHTML =
    "Tu jogaste " +
    textToEmoji(jogada) +
    " e o computador jogou " +
    textToEmoji(resultado.jogadaCPU) +
    ". " +
    resultado.resultado;
}

document
  .getElementById("botao_pedra")
  .addEventListener("click", onClickButton, false);

document
  .getElementById("botao_papel")
  .addEventListener("click", onClickButton, false);

document
  .getElementById("botao_tesoura")
  .addEventListener("click", onClickButton, false);

document.getElementById("botao_reset").addEventListener("click", function() {
  localStorage.removeItem("pontuacao");
  refreshPontuacao({
    vitorias: 0,
    empates: 0,
    derrotas: 0
  });
}, false);

  window.onload = function() {
    var pontuacao = getPontuacaoFromLocalStorage();
    refreshPontuacao(pontuacao);
  }

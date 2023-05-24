function realizarJogada(jogada) {
  const jogadas = ["pedra", "papel", "tesoura"];
  const numAleartorio = geraNumeroAleatório(0, jogadas.length);
  const jogadaComputador = jogadas[numAleartorio];

  return {
    jogadaCPU: jogadaComputador,
    resultado: getResultado(jogada, jogadaComputador),
  };
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

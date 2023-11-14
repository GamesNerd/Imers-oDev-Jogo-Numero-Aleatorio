var chutes = 0;
var chances = 3;
var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {
  if (chances != 0) {
    var chute = prompt("Digite um numero entre 0 a 1000!");
  }

  if (chances == 0) {
    chute = numeroSecreto;

    alert("Você perdeu todas as suas chances.");
  } else if (chute == numeroSecreto) {
    alert("Acertou! você chutou: " + chutes + " vezes");

    chutes = 0;
  } else if (chute > numeroSecreto) {
    chutes++;
    chances--;

    alert(
      "Tu é muito ruim, errou kk, o numero secreto é menor. Você chutou: " +
        chutes +
        " vezes." +
        " Você agora so tem: " +
        chances +
        " chances restantes."
    );
  } else if (chute < numeroSecreto) {
    chutes++;
    chances--;

    alert(
      "Tu é muito ruim, errou kk, o numero secreto é maior.  Você chutou: " +
        chutes +
        " vezes." +
        " Você agora so tem: " +
        chances +
        " chances restantes."
    );
  }
}

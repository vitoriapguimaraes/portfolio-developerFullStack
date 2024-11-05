alert("Boas vindas ao jogo do número secreto!");

let numero_maximo = 100;

let numeroSecreto = parseInt(Math.random() * numero_maximo) + 1;
console.log("O número secreto é: " + numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e " + numero_maximo);
  // Se o chute é igual ao número secreto
  if (chute == numeroSecreto) {
    break;
    // Se o chute não é igual ao número secreto
  } else {
      if (chute > numeroSecreto) {
        alert("O número secreto é menor que " + chute + ".");
      } else {
        alert("O número secreto é maior que " + chute + ".");
      }
      tentativas++;
  }
}

let palavra_tentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert("Isso aí! Você descobriu o número secreto " + numeroSecreto + " com " + tentativas + " " + palavra_tentativa);
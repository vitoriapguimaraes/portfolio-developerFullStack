var numeroSecreto = parseInt(Math.random()*11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10."
    } else if (chute == numeroSecreto + 1 || chute == numeroSecreto -1) {
        elementoResultado.innerHTML = "Eita, tá quente."
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "Você errou. É menor que isso."
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Você errou. É maior que isso."
    } else {
        elementoResultado.innerHTML = "Você errou, tente novamente."
    }
}
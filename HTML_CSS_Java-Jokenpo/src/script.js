function Chutar(escolhaJogador, botaoClicado) {

    let elementoResultado = document.getElementById("resultado");

    let opcoes = ["PEDRA", "PAPEL", "TESOURA"];
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let vitorias = {
        "PEDRA": "TESOURA", // Pedra vence Tesoura
        "PAPEL": "PEDRA",   // Papel vence Pedra
        "TESOURA": "PAPEL"  // Tesoura vence Papel
    };

    document.querySelectorAll("button").forEach(btn => btn.classList.remove("selecionado"));
    botaoClicado.classList.add("selecionado");

    if (escolhaJogador === escolhaComputador) {
        elementoResultado.innerHTML = `Empate! Ambos escolheram ${escolhaJogador}.`;
    } else if (vitorias[escolhaJogador] === escolhaComputador) {
        elementoResultado.innerHTML = `Você venceu! Computador escolheu ${escolhaComputador}.`;
    } else {
        elementoResultado.innerHTML = `Você perdeu! Computador escolheu ${escolhaComputador}.`;
    }

    document.getElementById("jogarNovamente").style.display = "inline-block";

}

function recarregarPagina() {
    location.reload(); // Recarrega a página
}
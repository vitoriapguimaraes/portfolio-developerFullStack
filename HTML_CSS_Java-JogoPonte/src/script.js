const totalRodadas = 3;
let rodada = 1;

function iniciarJogo() {
    rodada = 1;
    document.getElementById("game-container").innerHTML = "";
    criarNovaRodada();
}

function criarNovaRodada() {
    let gameContainer = document.getElementById("game-container");

    let novaRodada = document.createElement("div");
    novaRodada.classList.add("game");
    novaRodada.innerHTML = `
        <h3>Rodada ${rodada}: Escolha um vidro</h3>
        <div>
            <button onclick="chutar(1, this)" class="vidro">Vidro 1</button>
            <button onclick="chutar(2, this)" class="vidro">Vidro 2</button>
        </div>
        <h3 class="resultado">Resultado aparecerá aqui...</h3>
    `;

    gameContainer.appendChild(novaRodada);
}

function chutar(escolha, botaoClicado) {
    let resultadoElemento = botaoClicado.closest(".game").querySelector(".resultado");
    let pisoSeguro = Math.floor(Math.random() * 2) + 1;

    botaoClicado.closest(".game").querySelectorAll(".vidro").forEach(btn => btn.classList.remove("selecionado"));

    botaoClicado.classList.add("selecionado");

    if (escolha === pisoSeguro) {
        resultadoElemento.innerHTML = "Você pisou no vidro certo!";
        rodada++;
        if (rodada <= totalRodadas) {
            setTimeout(criarNovaRodada, 1000);
        } else {
            setTimeout(() => resultadoElemento.innerHTML = "Parabéns! Você atravessou a ponte!", 1000);
        }
    } else {
        resultadoElemento.innerHTML = "O vidro quebrou! Você caiu e perdeu o jogo.";
        setTimeout(iniciarJogo, 2000);
    }
}
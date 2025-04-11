// Preciso criar uma lista com os 3 jogadores
personagem = ["", "", ""];

personagemComputador = ["", "", ""];

forcaPersonagem = 0;

forcaPComputador = 0;

console.log(`O array Personagem contém: ${personagem}`)

for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt(`Digite o nome do seu personagem ${i + 1}`)
    personagem[i] = escolhaPersonagem

    // Calcular a força de cada jogador e depois somar para saber a força do time
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 10)
    personagemPossiveis = ["Jinx", "Ekko", "Vi", "Caitlyn", "Jayce", "Hecarim", "Ezreal", "Akali", "Ahri", "Viego"]

    personagemComputador[i] = personagemPossiveis[indiceAleatorio]

    // Calcular a força de cada jogador do time do computador
    forcaPComputador += Math.floor(Math.random() * 10) + 1;
}

// Comparar os dois times para saber quem venceu
if (forcaPersonagem > forcaPComputador) {
    alert(`Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi de ${forcaPersonagem} e a do seu adversário foi de ${forcaPComputador}.`)
}
else {
    if (forcaPersonagem < forcaPComputador) {
        alert(`Seu time é fraquinho! O adversário ganhou o cabo de guerra com força de ${forcaPComputador}, enquanto sua força é de ${forcaPersonagem}.`)
    }
    else{
        alert(`A disputa de cabo de guerra é empatada! Sua força e do adversário foram de ${forcaPersonagem}.`)
    }
}
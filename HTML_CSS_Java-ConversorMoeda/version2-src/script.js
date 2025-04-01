function Converter() {
    const moedaInicial = document.getElementById("identicacaoMoedaInicial").value.trim();
    const moedaFinal = document.getElementById("identicacaoMoedaFinal").value.trim();
    const taxa = parseFloat(document.getElementById("taxaConversão").value);
    const valor = parseFloat(document.getElementById("valor").value);
    const elementoResultado = document.getElementById("resultado");

    // Validação de entrada
    if (!moedaInicial || !moedaFinal || isNaN(taxa) || isNaN(valor)) {
        elementoResultado.innerHTML = "Preencha todos os campos corretamente!";
        elementoResultado.style.color = "red";
        return;
    }

    // Cálculo da conversão
    const valorConvertido = valor * taxa;

    // Exibição do resultado
    elementoResultado.innerHTML = `A conversão de ${moedaInicial} para ${moedaFinal} é $${valorConvertido.toFixed(2)}`;
    elementoResultado.style.color = "black"; // Resetando cor caso tenha erro antes
}

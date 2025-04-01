function Converter() {

    var moedaInicial = document.getElementById("identicacaoMoedaInicial");
    var moedaInicialTexto = moedaInicial.value;
     
    var moedaFinal = document.getElementById("identicacaoMoedaFinal");
    var moedaFinalTexto = moedaFinal.value;

    var taxaElemento = document.getElementById("taxaConversão");
    var taxa = taxaElemento.value;
    var taxaNumerico = parseFloat(taxa);

    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);
    
    var valorConvertido = valorNumerico * taxaNumerico;

    var elementoResultado = document.getElementById("resultado");
    
    var resultadoFinal = "A conversão de " + moedaInicialTexto + " para " + moedaFinalTexto + " é $ " + valorConvertido;

    elementoResultado.innerHTML = resultadoFinal;

    console.log(moedaInicialTexto)
    console.log(moedaFinalTexto)
    console.log(taxaNumerico)
    console.log(valorNumerico)
}


function showPopup(message, callback, isFinal = false, isRestart = false) {
  const popupContainer = document.getElementById("popup-container");
  const popupMessage = document.getElementById("popup-message");
  const popupInput = document.getElementById("popup-input");
  const popupButton = document.getElementById("popup-button");

  popupMessage.textContent = message;

  // Oculta o campo de entrada se for mensagem final
  if (isFinal) {
    popupInput.classList.add("hidden");
    popupButton.classList.remove("hidden");
    if (isRestart) {
      popupButton.textContent = "Recomeçar";
    } else {
      popupButton.textContent = "OK";
    }
  } else {
    popupInput.classList.remove("hidden");
    popupInput.value = "";
    popupButton.classList.remove("hidden");
    popupButton.textContent = "OK";
  }

  popupContainer.classList.remove("hidden");

  popupButton.onclick = function () {
    popupContainer.classList.add("hidden");
    if (!isFinal) {
      callback(popupInput.value);
    } else {
      if (isRestart) {
        // Recomeça o processo
        window.location.reload();
      } else {
        callback(); // No caso final, apenas executa o callback
      }
    }
  };
}

const notas = [];
let nome;

showPopup("Registre seu nome.", function (result) {
  nome = result;

  showPopup("Qual a nota do 1º bimestre?", function (nota1) {
    notas.push(parseFloat(nota1)); // Adiciona diretamente como número

    showPopup("Qual a nota do 2º bimestre?", function (nota2) {
      notas.push(parseFloat(nota2));

      showPopup("Qual a nota do 3º bimestre?", function (nota3) {
        notas.push(parseFloat(nota3));

        showPopup("Qual a nota do 4º bimestre?", function (nota4) {
          notas.push(parseFloat(nota4));

          // Cálculo da média
          const notaFinal = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
          const notaFixada = notaFinal.toFixed(2); // Fixando a média em 2 casas decimais

          showPopup(`${nome}, sua média foi de ${notaFixada}`, function () {
            console.log("Finalizado");
          }, true, true); // Fazendo o botão "Recomeçar"
        });
      });
    });
  });
});
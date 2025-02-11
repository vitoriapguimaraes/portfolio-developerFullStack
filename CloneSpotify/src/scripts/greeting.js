// Dizer Bom dia, boa tarde ou boa noite, conforme a hora atual.
document.addEventListener("DOMContentLoaded", function () {
    const hora = new Date().getHours();
    const greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (hora >= 0 && hora < 12) {
            greetingElement.textContent = "Bom dia!";
        } else if (hora >= 12 && hora < 18) {
            greetingElement.textContent = "Boa tarde!";
        } else {
            greetingElement.textContent = "Boa noite!";
        }
    }

    // Inserir o ano atual no copy
    const copy = document.getElementById("copy");
    if (copy) {
        copy.innerHTML += ` ${new Date().getFullYear()}`;
    }
});
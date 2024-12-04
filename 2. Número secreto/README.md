# Jogo do Número Secreto
Bem-vindo ao Jogo do Número Secreto! Este é um projeto simples de JavaScript que desafia o jogador a adivinhar um número secreto gerado aleatoriamente dentro de um intervalo predefinido. O jogo fornece dicas para ajudar o jogador a descobrir o número certo.
Este jogo é uma versão aprimorada do "Mentalista", um exercício também desenvolvido durante uma imersão da Alura.

## Ferramentas Utilizadas
- HTML: Estrutura básica do jogo.
- CSS: Estilos personalizados, com fonte modernas e layout intuitivo.
- JavaScript: Lógica do jogo.
- Alertas e Prompt: usados para interação com o jogador.

## Como Jogar
- Digite um número de 0 a 10 no campo de entrada.
- Clique em "Chutar" para verificar se acertou o número escolhido pelo programa.
- O resultado será exibido abaixo do botão, informando se você acertou ou errou.

## Funcionamento do Jogo, com exemplo de execução
1. O jogo gera um número secreto aleatório entre 1 e um valor máximo definido (por padrão, 100).
    - O jogo gera um número secreto (por exemplo, 42).
2. O jogador tenta adivinhar o número inserindo suas tentativas.
3. Se o chute for maior ou menor que o número secreto, o jogo informa o jogador, indicando se o número secreto é menor ou maior.
    - O jogador digita 50. O jogo responde: "O número secreto é menor que 50."
    - O jogador tenta 30. O jogo responde: "O número secreto é maior que 30."
4. O jogo continua até que o jogador acerte o número.
5. Ao acertar, o jogo exibe o número de tentativas necessárias para adivinhar o número correto.
    - O jogador acerta ao tentar 42. O jogo exibe: "Isso aí! Você descobriu o número secreto 42 com 3 tentativas."

## Como Jogar
1. Abra o arquivo index.html no navegador.
2. Um alerta será exibido com as boas-vindas e iniciando o jogo.
3. Digite um número entre 1 e 100 quando solicitado.
4. Continue tentando até acertar!
5. O jogo termina com uma mensagem mostrando o número de tentativas realizadas.

## Melhorias Futuras
- Opção para o jogador definir o intervalo do número secreto.
- Limitar o número de tentativas.
- Adicionar sons e animações para tornar o jogo mais envolvente.
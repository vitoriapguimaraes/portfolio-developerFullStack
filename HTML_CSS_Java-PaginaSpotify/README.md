# Clone da Página do Spotify
Eu repliquei esse projeto para tecnologia de React no frontend. Confira aqui o repositório: [Clone Spotify React](https://github.com/vitoriapguimaraes/portfolio-developerFullStack-web/tree/master/React_Java-PaginaSpotify).  

Esta é a versão do clone da interface do Spotify, desenvolvido com HTML, CSS e JavaScript. Ele enfatiza a construção de componentes reutilizáveis, integração com APIs e estilização responsiva. O objetivo principal é recriar a experiência visual e interativa da plataforma original.

## Demonstração/Visualização
Abaixo está uma visualização da interface da aplicação:

![Tela do sistema](https://github.com/vitoriapguimaraes/portfolio-developerFullStack-web/blob/master/HTML_CSS_Java-PaginaSpotify/display-PaginaSpotify.gif)

## Principais Tecnologias Utilizadas
- Frontend: HTML, CSS
- Backend Simulado: JSON Server
- JavaScript: Manipulação do DOM e requisições assíncronas

## Estrutura do Projeto
```
/PaginaSpotify
├── api-artists/
│   └── artists.json               # Simula uma API fake com dados de artistas
├── src/
│   ├── assets/
│   │   ├── icons                  # Ícones para a página
│   │   └── playlist               # Imagens para os cards da playlist
│   ├── scripts/
│   │   ├── script.js              # Implementação da busca de artistas
│   │   └── greeting.js            # Exibe saudação dinâmica (Bom dia, Boa tarde, Boa noite)
│   └── styles/
│       ├── main-content-rem.css   # Estilização da interface
│       ├── media-queries.css      # Ajustes responsivos
│       ├── reset.css
│       └── vars.css
├── index.html                     # Estrutura principal da página
│
└── README.md
```

## Como Executar
1. Instale o JSON Server (caso ainda não tenha):
   ```bash
   npm i json-server -g
   ```
2. Inicie a API fake:
   ```bash
   json-server --watch {caminho} --port 3000
   ```
3. Abra o `index.html` no navegador ou utilize uma extensão como Live Server para facilitar o desenvolvimento.

## Funcionalidades
- Exibição dinâmica de artistas consumindo a API fake
- Saudação automática baseada no horário do dia
- Interface responsiva adaptada para diferentes dispositivos
- Design inspirado no Spotify

## Resultados e Conclusões
Este projeto demonstrou a viabilidade da criação de um clone funcional da interface do Spotify com tecnologias simples e de fácil implementação. A utilização do JSON Server permitiu simular um backend, e a estilização com `rem` facilitou a adaptação para diferentes tamanhos de tela.

## Próximos Passos/Melhorias
- Finalizar a responsividade para telas menores:
    - Implementar a sidebar como um menu hambúrguer
    - Melhorar a experiência da busca de artistas
- Refinar detalhes visuais e interações

![Tela do sistema](https://github.com/vitoriapguimaraes/portfolio-developerFullStack-web/blob/master/HTML_CSS_Java-PaginaSpotify/display-PaginaSpotify_rem.gif)

<br>
<hr> 

### Currículos e Documentos
Acesse os arquivos disponíveis na pasta 
[![Documentos](https://img.shields.io/badge/DOCUMENTOS-%F0%9F%93%83-blue?style=flat-square)](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.

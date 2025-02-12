# Clone da Página do Spotify (React + Vite)

Eu repliquei esse projeto para tecnologia de HTML e CSS no frontend. Confira aqui o repositório: [Clone Spotify HTML | CSS](https://github.com/vitoriapguimaraes/portfolio-developerFullStack-web/tree/master/HTML_CSS_Java-PaginaSpotify).  

Esta é a versão do clone da interface do Spotify desenvolvida com React e Vite. O projeto enfatiza a construção de componentes reutilizáveis, integração com APIs e estilização responsiva. A migração para React permite uma melhor organização do código e maior eficiência na renderização dos componentes.

<!--
## Demonstração/Visualização
Abaixo está uma visualização da interface da aplicação:

![Tela do sistema](link)
-->

## Principais Tecnologias Utilizadas
- Frontend: React + Vite, Styled Components
- Gerenciamento de Estado React Hooks
- Backend Simulado: JSON Server

## Estrutura do Projeto
```
/react-spotify
├── src/
│   ├── api-artists/
│   │   └── artists.json               # Simula uma API fake com dados de artistas
│   ├── assets/
│   │   ├── icons                  # Ícones para a página
│   │   └── playlist               # Imagens para os cards da playlist
│   └── components/
│       ├── Header/                # Componente e estilo do cabeçalho da aplicação
│       ├── Sidebar/               # Componente e estilo da barra lateral
│       ├── Footer/                # Componente e estilo do rodapé
│       └── Playlist/              # Componente e estilo responsável por exibir playlists
├── App.jsx                        # Componente principal que estrutura a aplicação
├── main.jsx                       # Ponto de entrada do React
│
└── README.md
```
<!--
│   ├── scripts/
│   │   ├── script.js              # Implementação da busca de artistas
│   │   └── greeting.js            # Exibe saudação dinâmica (Bom dia, Boa tarde, Boa noite)
-->

## Como Executar
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o JSON Server para simular a API:
   ```bash
   npm run server --watch {caminho} --port 3000
   ```
4. Rode a aplicação React:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação no navegador pelo endereço indicado no terminal.

## Funcionalidades
- Interface inspirada no Spotify
- Componentização para maior reutilização e organização do código
- Exibição dinâmica de artistas consumindo a API fake
- Saudação automática baseada no horário do dia
- Sidebar funcional simulando a navegação
- Design responsivo adaptado para diferentes dispositivos

## Resultados e Conclusões
A migração para React trouxe uma estrutura mais modular e escalável para o projeto, tornando a manutenção mais simples. A utilização do Vite melhorou o tempo de build e recarregamento durante o desenvolvimento. O projeto continua simulando a experiência do Spotify de forma eficiente.

## Próximos Passos/Melhorias
- Implementar contexto global para gerenciamento de estado
- Replicar a experiência da busca de artistas
- Adicionar autenticação fictícia para um fluxo de usuário mais realista
- Refinar detalhes visuais e animações

<br>
<hr> 

### Currículos e Documentos
Acesse os arquivos disponíveis na pasta 
[![Documentos](https://img.shields.io/badge/DOCUMENTOS-%F0%9F%93%83-blue?style=flat-square)](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.

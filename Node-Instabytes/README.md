# Instabytes
O Instabytes é um projeto desenvolvido com o objetivo de criar uma aplicação para gerenciamento de posts. O backend foi implementado durante a Imersão Backend da Alura, com funcionalidades como upload de imagens e geração automática de descrições para acessibilidade. Já o frontend, fornecido pela equipe da Alura, oferece uma interface moderna e funcional.
Ambas as pastas (backend e frontend) contêm descrições detalhadas de cada parte do projeto. A descrição do backend inclui as funcionalidades e o aprendizado obtido durante o desenvolvimento, enquanto a do frontend explica a estrutura e os recursos do código original disponibilizado pela Alura.

## Demonstração/Visualização
Abaixo está uma visualização da interface da aplicação:

![Tela do sistema](https://github.com/vitoriapguimaraes/portfolio-web-Java/blob/master/Node-Instabytes/display-Instabytes.png)

## Como Executar
Siga as etapas abaixo para rodar o projeto localmente:
1. Clone o repositório:
    ```
    git clone https://github.com/vitoriapguimaraes/portfolio-web-Java/tree/master/Node-Instabytes
    ```

2. Crie um arquivo <code>.env</code> na raiz do projeto e configure as variáveis de ambiente para a conexão com o MongoDB e a chave da API do Gemini:
    ``` javascript
    CONNECTION_STRING = "sua_string_de_conexao"
    GEMINI_API_KEY = "sua_chave_da_api"
    ```

   Nota: Certifique-se de manter este arquivo seguro, pois ele contém informações sensíveis.

3. Suba o backend e o frontend separadamente:
  - Acesse a pasta backend e rode os comandos:
    ```
    cd backend
    npm install
    npm run dev
    ```

  - Em outra aba do terminal, acesse a pasta frontend e rode os comandos:
    ```
    cd frontend
    npm install
    npm run dev
    ```

3. Acesse a aplicação pelo navegador no endereço exibido pelo servidor do frontend.

## Estrutura do Projeto
```
/instabytes
│
├── backend/                           # Código do backend desenvolvido durante a Imersão Backend da Alura
│   ├── src/
│   │   ├── config/
│   │   │   └── dbconfig.js            # Configuração da conexão com o MongoDB
│   │   ├── controllers/
│   │   │   └── postsControllers.js    # Contém a lógica dos endpoints
│   │   ├── models/
│   │   │   └── postsModel.js          # Define a estrutura e funções para interagir com o banco de dados
│   │   ├── routes/
│   │   │   └── postsRoutes.js         # Define as rotas da API
│   │   ├── services/
│   │   │   └── geminiService.js       # Integração com o serviço Gemini para gerar descrições automáticas
│   ├── uploads/                       # Diretório onde as imagens enviadas são armazenadas
│   ├── server.js                      # Configuração do servidor e inicialização da aplicação
│   │
│   └── README.md                      # Descrição detalhada das funcionalidades e estrutura do backend
│
└── frontend/                          # Código do frontend fornecido pela Alura
    ├── assets/                        # Diretório com recursos estáticos usados pelo frontend
    │   ├── images/                    # Imagens do projeto
    │   │   └── byte.ico               # Ícone do projeto
    │   ├── js/                        # Scripts JavaScript
    │   │   ├── fetchApos.js           # Lida com requisições HTTP assíncronas
    │   │   └── index.js               # Script principal do frontend
    │   ├── style.css                  # Folha de estilos para o projeto
    │   ├── photos/                    # Fotos utilizadas no frontend
    │   │   └── gui.jpeg               # Foto de perfil
    │   └── index.html                 # Página principal do frontend
    │
    └── README.md                      # Descrição detalhada do código original e seus recursos
```

## Funcionalidades

### Backend
- Gerenciamento de posts.
- Upload de imagens com suporte a acessibilidade.
- Geração automática de descrições para imagens.

### Frontend
- Interface para visualização e gerenciamento de posts.
- Experiência de usuário moderna e intuitiva.

<br>
<hr> 

### Currículos e Documentos
Acesse os arquivos disponíveis na pasta 
[![Documentos](https://img.shields.io/badge/DOCUMENTOS-%F0%9F%93%83-blue?style=flat-square)](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.
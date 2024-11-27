# Gerenciamento de Posts com Upload de Imagens
Projeto desenvolvido durante a Imersão Backend da Alura.
Este projeto consiste em um backend para gerenciamento de posts, incluindo upload de imagens e geração automática de descrições para acessibilidade. Foi desenvolvido com foco em aprendizado e boas práticas de desenvolvimento backend.

## Funcionalidades Gerais
- Upload de imagens para os posts.
- Geração de descrições automáticas para imagens usando uma IA chamada Gemini.
- Gerenciamento de posts com operações de listagem, criação e atualização.
- Integração com o MongoDB para persistência de dados.

## Ferramentas e Tecnologias Utilizadas
- Node.js: Plataforma para execução do JavaScript no servidor.
- Express: Framework para construção de APIs REST.
- MongoDB: Banco de dados NoSQL utilizado para armazenar os posts.
- Multer: Middleware para gerenciar uploads de arquivos.
- Gemini Service: Serviço de IA para geração de descrições automáticas de imagens.

## Estrutura do Projeto
```plaintext
/
├── src/
│   ├── routes/
│   │   └── postsRoutes.js      # Rotas da aplicação
│   ├── controllers/
│   │   └── postsControllers.js # Lógica dos endpoints
│   ├── models/
│   │   └── postsModel.js       # Funções de interação com o banco de dados
│   ├── services/
│   │   └── geminiService.js    # Integração com o serviço Gemini
├── uploads/                    # Diretório para armazenar imagens
├── dbconfig.js                 # Configuração de conexão com o MongoDB
└── server.js                   # Configuração do servidor
```

## Como Executar a Análise
1. Pré-requisitos:
  - Node.js instalado.
  - String de conexão com o MongoDB Atlas.
2. Configuração:
  - Clone este repositório.
  - Instale as dependências com npm install.
  - Configure a string de conexão no arquivo dbconfig.js.
3. Execução:
- Execute o servidor com node server.js.
- Acesse o servidor localmente em http://localhost:3000.
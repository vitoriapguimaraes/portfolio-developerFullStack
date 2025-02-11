# Gerenciamento de Posts com Upload de Imagens
Este projeto foi desenvolvido durante a Imersão Backend da Alura e tem como objetivo fornecer um backend robusto para o gerenciamento de posts. Ele inclui funcionalidades como upload de imagens e geração automática de descrições acessíveis usando IA. O foco principal do projeto é o aprendizado de boas práticas de desenvolvimento backend, além de oferecer uma solução funcional e escalável.

## Principais Tecnologias Utilizadas
- Node.js: Plataforma para execução de JavaScript no servidor.
- Express: Framework para criação de APIs RESTful.
- MongoDB: Banco de dados NoSQL utilizado para armazenar os posts e metadados.
- Multer: Middleware para gerenciar uploads de arquivos.
- Gemini Service: Serviço de inteligência artificial para gerar descrições automáticas de imagens.

## Estrutura do Projeto
```
/InstabytesBackend
├── src/
│   ├── config/
│   │   └── dbconfig.js            # Configuração da conexão com o MongoDB
│   ├── controllers/
│   │   └── postsControllers.js    # Contém a lógica dos endpoints
│   ├── models/
│   │   └── postsModel.js          # Define a estrutura e funções para interagir com o banco de dados
│   ├── routes/
│   │   └── postsRoutes.js         # Define as rotas da API
│   ├── services/
│   │   └── geminiService.js       # Integração com o serviço Gemini para gerar descrições automáticas
├── uploads/                       # Diretório onde as imagens enviadas são armazenadas
├── server.js                      # Configuração do servidor e inicialização da aplicação
│
└── README.md   # Descrição detalhada das funcionalidades e estrutura do backend
```

## Como Executar
### Pré-requisitos
- Node.js instalado em sua máquina.
- Uma string de conexão com o MongoDB (pode ser obtida através do MongoDB Atlas).

### Passos para executar o projeto
1. Clone o repositório:
    ```
    git clone https://github.com/vitoriapguimaraes/portfolio-web-Java/tree/master/Node-Instabytes/InstabytesBackend
    ```

2. Instale as dependências:
    ```
    npm install
    ```

3. Crie um arquivo <code>.env</code> na raiz do projeto e configure as variáveis de ambiente para a conexão com o MongoDB e a chave da API do Gemini:
    ``` javascript
    CONNECTION_STRING = "sua_string_de_conexao"
    GEMINI_API_KEY = "sua_chave_da_api"
    ```

   Nota: Certifique-se de manter este arquivo seguro, pois ele contém informações sensíveis.

4. Execute o servidor:
    ```
    npm run dev
    ```

5. Acesse a aplicação localmente:
    - O servidor estará disponível em http://localhost:3000.
    - Utilize o Postman, Insomnia ou qualquer outra ferramenta para testar as rotas da API.

## Funcionalidades
- Upload de imagens diretamente para o servidor.
- Geração de descrições automáticas para imagens com foco em acessibilidade, utilizando IA (Gemini).
- CRUD completo para posts:

  - Listar todos os posts.
  - Criar novos posts com imagens.
  - Atualizar posts existentes.
  - Excluir posts.

## Resultados e Conclusões
Este projeto demonstrou como integrar ferramentas e serviços para criar um backend eficiente e funcional. A funcionalidade de upload e geração automática de descrições é um exemplo prático de como a inteligência artificial pode ser usada para tornar sistemas mais inclusivos e acessíveis.

## Próximos Passos/Melhorias
- Implementar autenticação e controle de acesso aos endpoints.
- Adicionar suporte para múltiplos formatos de imagens.
- Melhorar o gerenciamento de erros e validação dos inputs.

<br>
<hr> 

### Currículos e Documentos
Acesse os arquivos disponíveis na pasta 
[![Documentos](https://img.shields.io/badge/DOCUMENTOS-%F0%9F%93%83-blue?style=flat-square)](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.

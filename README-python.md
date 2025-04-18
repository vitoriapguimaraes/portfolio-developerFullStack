# Portfólio de Projetos: Desenvolvimento em Python
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Tkinter](https://img.shields.io/badge/Tkinter-FF6F00?style=for-the-badge&logo=python&logoColor=white)
![Flet](https://img.shields.io/badge/Flet-FFD43B?style=for-the-badge&logo=python&logoColor=black)
![Flask-SocketIO](https://img.shields.io/badge/Flask--SocketIO-000000?style=for-the-badge&logo=flask&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![PyAutoGUI](https://img.shields.io/badge/PyAutoGUI-3766AB?style=for-the-badge&logo=python&logoColor=white)
![PIL](https://img.shields.io/badge/PIL-3776AB?style=for-the-badge&logo=python&logoColor=white)

Este repositório apresenta uma variedade de projetos desenvolvidos em Python, abrangendo desde automação de tarefas rotineiras, como backups e envio de relatórios por e-mail, até soluções interativas, como jogos e ferramentas de chat em tempo real. Além disso, inclui projetos de análise de dados, aprendizado de máquina com redes neurais e inteligência artificial aplicada, destacando a versatilidade do Python em diferentes contextos e objetivos.

<strong>Abaixo, está a lista de cada projeto com seu respectivo resumo. Sinta-se à vontade para explorar mais sobre demonstrações, resultados e outros detalhes!</strong>

### 1. Automação de Cadastro de Produtos em Portal Web
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/1.%20Automa%C3%A7%C3%A3o%20de%20cadastro)

Este projeto automatiza o cadastro de produtos em um site de vendas, acessando automaticamente o site e preenchendo os formulários de cadastro com dados de um arquivo CSV.
- Tecnologias: Python, PyAutoGUI, Pandas
- Funcionalidades:
    - Login automatizado no portal de vendas.
    - Cadastro em lote de produtos.
    - Configuração de coordenadas de clique para diferentes monitores com script auxiliar.

### 2. Automação de Backup
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/2.%20Automo%C3%A7%C3%A3o%20de%20backup)

Este projeto automatiza o backup de arquivos e pastas, criando cópias organizadas por data e hora. Foi projetado para simplificar e agilizar o processo de backup, garantindo a segurança dos dados.
- Tecnologias: Python, OS, Shutil, Tkinter
- Funcionalidades:
    - Seleção automática do diretório para backup.
    - Criação de uma nova pasta com o timestamp do backup.
    - Cópia de arquivos e diretórios inteiros, preservando estrutura e metadados.

### 3. Classificação de Imagens com Redes Neurais Convolucionais e TensorFlow
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/3.%20Classifica%C3%A7%C3%A3o%20Imagens%20com%20TensorFlow)

Este projeto aborda a construção de um modelo de Inteligência Artificial para classificação de imagens em 10 categorias diferentes usando o dataset CIFAR-10. O objetivo é que o modelo consiga identificar e classificar novas imagens de acordo com essas categorias.
- Tecnologias: Python, TensorFlow, Keras, Numpy, Matplotlib, PIL
- Funcionalidades: Carregamento e visualização de dados, construção e treinamento de uma CNN, classificação de novas imagens

### 4. Robô Trading com Inteligência Artificial usando Q-Learning em Python
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/4.%20Rob%C3%B4%20Trading%20com%20Q-Learning)

Criar um robô que toma decisões de compra e venda de ações para maximizar o lucro.
- Tecnologias: Python, Pandas, Numpy, Plotly, Q-Learning
- Funcionalidades: Visualização dos dados, configuração e treinamento do modelo Q-Learning, execução do robô

### 5. HashZap: Chat em Tempo Real
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/5.%20Site%20Chat%20ao%20Vivo)

Chat em tempo real com Flask-SocketIO e uma versão alternativa em Flet.
- Tecnologias: Python, Flask-SocketIO, Flet
- Funcionalidades:
    - Chat em tempo real para múltiplos usuários na mesma rede.
    - Envio e exibição de mensagens instantâneas com atualizações automáticas.

### 6. Envio de Relatório de Dados por E-mail
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/6.%20Relat%C3%B3rio%20de%20Dados%20por%20Email)

Automação de relatórios de vendas por loja, com processamento de dados e envio automático de um e-mail com o relatório em HTML. Ideal para equipes de vendas que precisam de atualizações frequentes.

- Tecnologias: Python, Pandas, win32com.client
- Funcionalidades:
    - Leitura e análise de uma base de dados de vendas em Excel.
    - Cálculo do faturamento, quantidade vendida e ticket médio por loja.
    - Envio de e-mail em formato HTML com tabelas de resultados integradas, prontas para visualização direta no corpo do e-mail.

### 7. Jogo da Forca
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/7.%20Jogo%20da%20Forca)

Uma versão orientada a objetos do clássico Jogo da Forca, desenvolvida em Python, com funcionalidades de validação de entradas e controle de tentativas do usuário.
- Tecnologias: Python
- Funcionalidades:
    - Uso de classes para organizar o código e implementar a lógica do jogo.
    - Implementação da lógica básica do Jogo da Forca.
    - Validação de entradas do usuário, com feedback para tentativas incorretas e controle das tentativas restantes.

### 8. Calculadora simples
[![Acesse o Repositório](https://img.shields.io/badge/Acesse%20o%20Reposit%C3%B3rio-gray?style=for-the-badge)](https://github.com/vitoriapguimaraes/portifolio-python-development/tree/main/8.%20Calculadora)

Uma calculadora simples que realiza operações básicas e oferece validação e tratamento de erros.
- Tecnologias: Python
- Funcionalidades:
    - Operações básicas de soma, subtração, multiplicação e divisão.
    - Validação das entradas e tratamento de erros.
    - Melhorias previstas para a versão 2: uso de funções para as operações e implementação de tratamento de exceções com try, except e finally.

<br>
<hr> 

### Currículos e Documentos
Acesse os arquivos disponíveis na pasta 
[![Documentos](https://img.shields.io/badge/DOCUMENTOS-%F0%9F%93%83-blue?style=flat-square)](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.

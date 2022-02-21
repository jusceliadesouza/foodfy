<h1 align=center>Foodfy</h1>

<p align="center" style="display: flex; justify-content: space-evenly;">
  <img src="https://img.shields.io/github/languages/count/jusceliadesouza/foodfy?color=%237159c1&style=for-the-badge" alt="Linguagens">
  <img src="https://img.shields.io/github/languages/top/jusceliadesouza/foodfy?color=%237159c1&style=for-the-badge" alt="Linguagem mais utilizada">
  <img src="https://img.shields.io/github/last-commit/jusceliadesouza/foodfy?color=%237159c1&style=for-the-badge"
    alt="">
</p>

## Índice
  
- [Projeto](#projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instruções](#instruções)
  - [Instale o Postbird](https://www.electronjs.org/apps/postbird)

## Projeto

<p align=justify>
O Foodfy consiste em um sistema de gerenciamento de receitas, com área administrativa, capaz de visualizar, cadastrar, atualizar e excluir dados. 
</p>

## Tecnologias

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [PostgreSQL](https://www.postgresql.org/)

## Funcionalidades

- [x] Criação, visualização, edição, atualização e remoção de receitas e chefs
- [x] Banco de Dados relacional 
- [x] Filtragem de receitas
- [x] Padronização e dinamismo das páginas utilizando Template Engine
- [x] Paginação

## Instruções

<p align=justify>
  Para que seja possível rodar a aplicação em sua máquina, é necessário ter instalado o <a href="https://nodejs.org/en/" target="_blank">Node</a> e o <a href="https://www.postgresql.org/">PostgreSQL</a>. Você pode utilizar a opção de download ou seguir o passo de instalação antes do que execução.
</p>

### Instalação
```bash
# Abra o terminal e selecione a pasta que será instalado. Ex:
$ cd "C:\Users\username\Documents"

# Clone o repositório com o comando a seguir
$ git clone https://github.com/jusceliadesouza/foodfy.git
```

### Execução

```bash
# Entre na pasta
$ cd foodfy

# Instale as dependências
$ npm install

# Crie e importe o banco de dados, manualmente, 
# utilizando o Postbird - o link para instalação 
# está no índice desse arquivo - ou utilize
# o seguinte comando

$ psql -U postgres -c "CREATE DATABASE foodfy"
$ psql -U postgres -d foodfy <database.sql

# Após a criação, será necessário que você edite o
# arquivo src/config/db.js utilizando as credenciais
# user e password instaladas na sua máquina

# Rode a aplicação
$ npm start
```
<br>

> O aprendizado é contínuo e sempre haverá um próximo nível!

<br>

<p align=center>Feito com ❤ por <strong>Juscélia de Souza</strong></p>

<p align="center" style="display: flex; justify-content: space-evenly;">
  <a href="https://www.linkedin.com/in/jusceliadesouza/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/-Linkedin-2D2C2A?style=for-the-badge&logo=Linkedin&logoColor=blue"
      alt="LinkedIn">
  </a>
  <a href="mailto:jusceliadesousa@gmail.com">
    <img src="https://img.shields.io/badge/-Gmail-2D2C2A?style=for-the-badge&logo=Gmail&logoColor=red" alt="Gmail">
  </a>
  <a href="https://discord.com/channels/@me/677177966693974056">
    <img src="https://img.shields.io/badge/-Discord-2D2C2A?style=for-the-badge&logo=Discord&logoColor=f2f2f2"
      alt="Discord">
  </a>
</p>

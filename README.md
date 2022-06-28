<p align="center"><img width='150px' src='https://github.com/brunojlee/desafio-fatec/blob/dev/bruno-roja/repo/media/readmeAnimation.gif' />
<h1 align="center"> Feedback Responsive Page </h1>
<h2 align="center">GitHub Pages:</h2>
 
 <div align="center">
   <a href="https://brunojlee.github.io/desafio-fatec/" target="_blank">
    <img width='100px' src='https://github.com/brunojlee/desafio-fatec/blob/dev/bruno-roja/repo/media/bgGH.jpg' target="_blank" />
 </div>
 
<h5 align="center">Clique na imagem</h5>

## 👩🏾‍💻Desenvolvido por

@[BrunoJLee](https://github.com/brunojlee)
<br>

---

## 💡 Sobre o Projeto

O Feedback é uma versão simplificada, ainda sem persistência no banco de dados, de uma **Página de feedbacks**.
A partir dessas demandas, desenvolvi uma aplicação onde os usuários poderão:

- Enviar perguntas a serem respondidas para outros usuários;
- Interagir com os produtos recebidos de modo a adicioná-los ao carrinho de compras e favoritos;
- Caso algum produto seja adicionado ao carrinho de compras o usuário poderá visualizar o indicativo de item adicionado no canto superior direito do header, com a presença da quantidade de produtos no carrinho;
- Interagir com os produtos através do carousel;
- E por fim, utilizar a aplicação de forma responsiva tanto em aparelhos mobiles quanto desktops.

## 🗺 Roteiro de Desenvolvimento

1. Feito fork do projeto localizado no repositório: https://github.com/AGA-Tecnologia/desafio-fatec;
2. Realizada análise dos requisitos presentes no modelo de negócio proposto no ReadMe repositório;
3. Após as análises, iniciei o desenvolvimento do client em React para demonstração do uso como MVP utilizando o método mobile first;
4. Neste momento, estou desenvolvendo o server em Node para interação da página com o banco de dados para ter a persistência das informações.

Próximos passos:
1. Após o desenvolvimento do server, será alterada a lógica de login para que apenas os emails cadastrados pelos emails com privilégio admin consigam acessar a página;
2. Com a lógica de autenticação finalizada, serão separadas as perguntas por email para que as respostas de um usuário não entre em conflito com as respostas dos outros.

Expansões futuras possíveis:
1. Criação de templates automatizados de pesquisas e feedbacks;
2. Tratamento das informações em banco de dados para geração de estatísticas de avaliação dos serviços;
3. Tratamento das estatísticas para análise e tomadas de decisões baseadas em UX Research.

## 🛠 Tecnologias Usadas

- HTML5
- CSS3
- Javascript
- React.Js
- React Router
- ContextAPI
- NodeJS
- ExpressJS
- Axios
- MySql

## 🎲 Banco de dados

O banco de dados está em fase de implementação.

## 🧙‍♂️ Como Iniciar o Projeto em progresso:

Primeiro faça a clonagem do projeto em algum diretorio do seu computador:

```bash
> cd "users/usuario/desktop/ecommerce"
> git clone git@github.com:brunojlee/desafio-fatec.git
```

Depois disso, entre na pasta client, instale as dependências e inicie a aplicação:

```bash
> cd client
> npm install
> npm start
```

O projeto iniciará em seu navegador padrão, através do endereço: http://localhost:3000/ .

Para demonstração da página, foi criado temporariamente uma rota para criação das perguntas que é direcionada ao entrar com o email admin@agatecnologia.com, com qualquer senha de pelo menos 7 caracteres.
Qualquer outro email usado para login irá direcionar o usuário para a página de respostas.

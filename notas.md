Inicializando projeto 
---
1. Iniciando o arquivo node.js: 
npm init -y
2. Fazendo configurações padrões
3. instalando o typescript:
npm i typescript@5.5.4 @types/node@20.14.12 -D
(essa foi uma versão expecifica para a aula)

Instalando e configurando typescript
--- 
1. o node não consegue executar um arquivo ts com tipagem então vamos compilar o código para js
- npm: serve para instalar pacotes na aplicação 
- npx: serve para executar pacotes na aplicaçã0
2. instalando o tsx:  npm i tsx -D
3. criando o script com o watch: "dev": "tsx --watch src/server.ts"
4. configurando o ts: 
- npx tsc --init: cria o tsconfig.json
- https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping: aqui encontramos config. bases que precisam ser feitas de forma manual

Express 
---
1. framework flexivel e minimalista para o Node. Lida com requisições e respostas. Entrega muitos recursos prontos.
2. instalando e configurando o express:
- npm i express
- usando para desenvolvimento e produçāo
- precisa ser importado no arquivo principal
- precisa instalar a tipagem do express: 
  - npm i --save-dev @types/express



CRIANDO A API REST
---
1. importando o express

2. inicializando o express e colocando dentro da constante app todos os recursos que vamos ter disponiveis
- fazendo a requisição GET - recuperando parametros nomeados (params)
- recuperando parametros não nomeados(query params)

3. fazendo uma requisição POST
3.1 entre XML e JSON, definimos o json como leitor de dados

4. devolvendo resposta em formato JSON e passando o status code como 201

5. criando middlewares globa

6. importando os tipos de request e response que ja vem na biblioteca do express. Normalmente quando usamos bibliotecas, elas ja veem com os tipos definidos, so temos que importar

7. next, usado para passar para a proxima requisicao

8. usando o middleware global, em todas as requisições - precisa estar acima de todas as requisições no codigo para que seja global

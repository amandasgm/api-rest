Inicializando, instalando e configurando typescript
--- 
1. Iniciando o arquivo node.js: 
npm init -y
2. Fazendo configurações padrões
3. instalando o typescript:
npm i typescript@5.5.4 @types/node@20.14.12 -D
(essa foi uma versão expecifica para a aula)
4. o node não consegue executar um arquivo ts com tipagem então vamos compilar o código para js
- npm: serve para instalar pacotes na aplicação 
- npx: serve para executar pacotes na aplicaçã0
5. instalando o tsx:  npm i tsx -D
6. criando o script com o watch: "dev": "tsx --watch src/server.ts"
7. configurando o ts: 
- npx tsc --init: cria o tsconfig.json
- 
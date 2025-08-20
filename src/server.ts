// 1. importando o express
import express, { response } from "express"
import { request } from "http"

// definindo uma constante para a porta
const PORT = 3333

// 2. inicializando o express
const app = express()

// 3.1 deixando claro que vamos utilizar o json para representar dados
app.use(express.json())


// ! fazendo uma requisição get
app.get("/products", (request, response) => {
  const { page, limit } = request.query
  response.send(`Pagina ${page} de ${limit}`)
})

// 3. fazendo uma requisição POST
app.post("/products", (request, response) => {
  const { name, price } = request.body
  response.send(`Produto ${name} custa $${price}`)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
// 1. importando o express
import express, { response } from "express"
import { request } from "http"

// definindo uma constante para a porta
const PORT = 3333

// 2. inicializando o express
const app = express()

// fazendo uma requisição get
app.get("/products", (request, response) => {
  const { page, limit } = request.query

  response.send(`Pagina ${page} de ${limit}`)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
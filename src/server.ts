// 1. importando o express
import express, { response } from "express"
import { request } from "http"
import { myMiddleware } from "./middlewares/my-middleware"

// definindo uma constante para a porta
const PORT = 3333

// 2. inicializando o express
const app = express()

// 3.1 deixando claro que vamos utilizar o json para representar dados
app.use(express.json())

// 8. usando o middleware para todas as rotas
app.use(myMiddleware)

// fazendo uma requisição get
app.get("/products", (request, response) => {
  const { page, limit } = request.query
  response.send(`Pagina ${page} de ${limit}`)
})

// 3. fazendo uma requisição POST
// 9. utilizando o middlerware de forma local
app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body

  // 4. devolvendo a resposta no formato JSON:
  // 13. adicionando o user_id com tipagem
  response.status(201).json({ name, price, user_id: request.user_id })
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
// 14. 

import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router()

// ! get
productsRoutes.get("/:id", (request, response) => {
  const { page, limit } = request.query
  const { id } = request.params
  response.send(`Metodo GET sendo feito! Página ${page} de ${limit} - ID: ${id}`)
})

// ! post
// 3. fazendo uma requisição POST
// 9. utilizando o middlerware de forma local
productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body

  // 4. devolvendo a resposta no formato JSON:
  // 13. adicionando o user_id com tipagem
  response.status(201).json({ name, price, user_id: request.user_id })
})

export { productsRoutes }
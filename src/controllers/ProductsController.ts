// 16. separando controlers
import { Request, Response } from "express";

// 20. importando o diferenciador de erros
import { AppError } from "../utils/AppError";

export class ProductsController{
  // ! get
  index(request: Request, response: Response){
    const { page, limit } = request.query

    throw new AppError("Erro ao tentar reciperar um produto")


    response.send(`Metodo GET sendo feito! Página ${page} de ${limit}`)
  }

  // ! post
  create(request: Request, response: Response){
    const { name, price } = request.body

    // throw new Error("Erro ao tentar criar um produto")

    // 20. passando o AppError como erro
    throw new AppError("Erro ao tentar criar um produto")

    response.status(201).json({ name, price, user_id: request.user_id })
  }
}
// 16. separando controlers
import { Request, Response } from "express";

// 20. importando o diferenciador de erros
import { AppError } from "../utils/app-error";

// 24. importando o zod
import { z } from "zod"

export class ProductsController{
  // ! get
  index(request: Request, response: Response){
    const { page, limit } = request.query

    response.send(`Metodo GET sendo feito! Página ${page} de ${limit}`)
  }

  // ! post
  create(request: Request, response: Response){

    // 24.1 criando uma constante para o schema validation
    const bodySchema = z.object({ 
      // 26. criando regras de validação com o zod
      name: z
        .string({required_error: "Name is required"})
        .trim()
        .min(5, "Too short"), 
      price: z
        .number({ required_error: "Price is required" })
        .positive("Price must be greater then 0")
        .gte(100, "Maior ou igual a 100")
    })

    const { name, price } = bodySchema.parse(request.body)

    response.status(201).json({ name, price, user_id: request.user_id })
  }
}
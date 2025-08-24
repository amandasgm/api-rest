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
      name: z.string(), 
      price:z.number().nullish() // 25. campo pode ser opcional
    })

    const { name, price } = bodySchema.parse(request.body)


    // // 22. tratando erros como "campos obrigatorios"
    // // ! exeções de name
    // if(!name){
    //   throw new AppError("Nome do produto é obrigatório", 401)
    // }
    // if(name.trim().length < 6){
    //   throw new AppError("Nome do produto precisa ter no minimo 6 caracters")
    // }

    // // ! exeções de price
    // if(!price){
    //   throw new AppError("Preço do produto é obrigatório", 401)
    // }
    // if(price < 0){
    //   throw new AppError("Preço do produto não pode ser negativo", 401)
    // }

    response.status(201).json({ name, price, user_id: request.user_id })
  }
}
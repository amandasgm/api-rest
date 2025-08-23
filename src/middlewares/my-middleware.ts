// 6. importando tipos
import { Request, Response, NextFunction } from "express";


export function myMiddleware(
  request: Request, 
  response: Response, 
  next: NextFunction
){
  // 10. modificando requisição, adicionando uma nova propriedade pelo middleware
  request.user_id = "123456"

  console.log("Passou pelo meu middleware!")

  // 7. usamos next para passar para a proxima requisição
  return next()
}
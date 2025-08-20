// 6. importando tipos
import { Request, Response, NextFunction } from "express";


export function myMiddleware(request: Request, response: Response, next: NextFunction){
  console.log("Passou pelo meu middleware!")
  // 7. usamos next para passar para a proxima requisição
  return next()
}
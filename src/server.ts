// 1. importando o express
import express, { NextFunction, Response, Request } from "express"
import { routes } from "./routes"

// 21. deixando mais dinamico o tratamento do erro
import { AppError } from "./utils/app-error"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

// 18. tratando exceções
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
  // se é um erro que foi gerado utilizando a classe AppError
  if(error instanceof AppError){
    return response.status(error.statusCode).json({ message: error.message})
  }else{
    response.status(500).json({ message: error.message})
  }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
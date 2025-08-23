// 1. importando o express
import express, { NextFunction, Response, Request } from "express"
import { routes } from "./routes"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

// 18. tratando exceções
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
  response
  .status(500)
  .json({ message: error.message})
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
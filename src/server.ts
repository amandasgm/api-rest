// 1. importando o express
import express, { response } from "express"
import { productsRoutes } from "./routes/products-routes"
import { routes } from "./routes"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
// 1. importando o express
import express from "express"

const PORT = 3333

// 2. criando a  primeira requisição
const app = express()

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ✅`)) 
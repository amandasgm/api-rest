// 14. criando arquivos para separar rotas
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

// 17. importando o controller
import { ProductsController } from "../controllers/ProductsController";


export const productsRoutes = Router()
// 17.1 instanciando o controller
const productsController = new ProductsController()

// ! get
// 17.2 importando o controller e passando o metodo respectivo para a requisição - nesse caso index
productsRoutes.get("/", productsController.index)

// ! post
// nesse caso create
productsRoutes.post("/", myMiddleware, productsController.create)


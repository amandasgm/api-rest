// 15. objetivo de juntar todas as rotas que temos de forma automatica

import { Router } from "express";
import { productsRoutes } from "./products-routes";

const routes = Router()

routes.use("/products", productsRoutes)
// routes.use("/users", productsRoutes)
// routes.use("/clients", productsRoutes)

export{ routes }
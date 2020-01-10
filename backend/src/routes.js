import { Router } from "express";

import UserController from "./App/Controllers/UserController";

const routes = new Router();

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/user", UserController.create);
routes.put("/user/:id", UserController.update);

export default routes;

import { Router } from "express";

import UserController from "./App/Controllers/UserController";
import ListController from "./App/Controllers/ListController";

const routes = new Router();

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/user", UserController.create);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.destroy);

routes.get("/list", ListController.index);
routes.post("/list/:user_id", ListController.create);

export default routes;

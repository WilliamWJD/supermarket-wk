import { Router } from "express";

import UserController from "./App/Controllers/UserController";

const routes = new Router();

routes.post("/user", UserController.create);

export default routes;

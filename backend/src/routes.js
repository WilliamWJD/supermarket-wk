import { Router } from "express";

import UserController from "./App/Controllers/UserController";
import ListController from "./App/Controllers/ListController";
import DetailController from "./App/Controllers/DetailController";
import SessionsController from "./App/Controllers/SessionsController";

const routes = new Router();

// SESSIONS
routes.post("/sessions", SessionsController.create);

// USERS
routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/user", UserController.create);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.destroy);

// LISTS
routes.get("/list", ListController.index);
routes.post("/user/:user_id/list", ListController.create);
routes.put("/list/:list_id", ListController.update);
routes.delete("/list/:list_id", ListController.destroy);

// DETAILS
routes.get("/user/:user_id/list/:list_id/detail", DetailController.index);
routes.post("/user/:user_id/list/:list_id/detail", DetailController.create);
routes.put(
  "/user/:user_id/list/:list_id/detail/:detail_id",
  DetailController.update
);
routes.delete(
  "/user/:user_id/list/:list_id/detail/:detail_id",
  DetailController.destroy
);

export default routes;

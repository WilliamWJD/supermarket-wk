import express from "express";

import routes from "./routes";
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.route();
  }

  middleware() {
    this.server.use(express.json());
  }

  route() {
    this.server.use(routes);
  }
}

export default new App().server;

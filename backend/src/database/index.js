import Sequelize from "sequelize";

import config from "../config/database";

import User from "../App/Models/User";
import List from "../App/Models/List";

const models = [User, List];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }
}

export default new Database();

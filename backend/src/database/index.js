import Sequelize from "sequelize";

import config from "../config/database";

import User from "../App/Models/User";
import List from "../App/Models/List";

const models = [User, List];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();

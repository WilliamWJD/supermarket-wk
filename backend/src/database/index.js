import Sequelize from "sequelize";

import config from "../config/database";

import User from "../App/Models/User";
import List from "../App/Models/List";
import Detail from "../App/Models/Detail";
import File from "../App/Models/File";

const models = [User, List, Detail, File];

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

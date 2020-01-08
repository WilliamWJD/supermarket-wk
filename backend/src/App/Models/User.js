import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        image_path: Sequelize.STRING
      },
      { connection }
    );
  }
}

export default new User();

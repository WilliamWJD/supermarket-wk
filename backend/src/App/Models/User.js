import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        image_path: Sequelize.STRING
      },
      {
        sequelize,
        define: {
          singular: "user",
          plural: "users"
        }
      }
    );
  }

  static associate(models) {
    this.hasMany(models.List);
  }
}

export default User;

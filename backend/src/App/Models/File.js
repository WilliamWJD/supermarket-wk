import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING
      },
      {
        sequelize,
        define: {
          singular: "file",
          plural: "files"
        }
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "file_id"
    });
  }
}

export default User;

import Sequelize, { Model } from "sequelize";

class List extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN
      },
      {
        sequelize,
        singular: "list",
        plurar: "lists"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
    this.hasMany(models.Detail);
  }
}

export default List;

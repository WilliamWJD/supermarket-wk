import Sequelize, { Model } from "sequelize";

class Detail extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN
      },
      {
        sequelize,
        singular: "detail",
        plurar: "details"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.List, { foreignKey: "list_id" });
  }
}

export default Detail;

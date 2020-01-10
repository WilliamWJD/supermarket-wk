import Sequelize, { Model } from "sequelize";

class Detail extends Model {
  static init(sequelize) {
    super.init(
      {
        id_list: Sequelize.INTEGER,
        description: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.List);
  }
}

export default Detail;

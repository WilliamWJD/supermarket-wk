import Sequelize, { Model } from "sequelize";

class List extends Model {
  static init(sequelize) {
    super.init(
      {
        id_user: Sequelize.INTEGER,
        status: Sequelize.BOOLEAN
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.hasMany(models.Detail);
  }
}

export default List;

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
}

export default List;

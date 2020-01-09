module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("lists", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" }
      },
      status: {
        type: Sequelize.INTEGER,
        default: false,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("lists");
  }
};

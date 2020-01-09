module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("details", {
      id_list: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "lists", key: "id" }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
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
    return queryInterface.dropTable("details");
  }
};

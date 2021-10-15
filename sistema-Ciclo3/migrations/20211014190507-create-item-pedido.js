'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ItemPedidos', {
      PedidoId: {
        allowNull : false,
        primaryKey : true,
        type : Sequelize.INTEGER,
        references: {
        model : 'pedidos',
        key : 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },
      ServicoId: {
        allowNull : false,
        primaryKey : true,
        type : Sequelize.INTEGER,
        references: {
          model: 'Servicos',
          key: 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },
      uqntidade: {
        type: Sequelize.INTEGER
      },
      valoe: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ItemPedidos');
  }
};
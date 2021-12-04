'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     const { INTEGER,STRING,DATE } = Sequelize
     await queryInterface.createTable('borrows',{
       id: {type: INTEGER, primaryKey: true, autoIncrement: true },
       book_id: INTEGER,
       user_id: INTEGER,
       number: INTEGER,
       updated_at: DATE,
       created_at: DATE
     })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('borrows');
  }
};

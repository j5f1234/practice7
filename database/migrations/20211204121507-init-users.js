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
     await queryInterface.createTable('books',{
       id: {type: INTEGER, primaryKey: true, autoIncrement: true },
       name: STRING(30),
       total: INTEGER,
       remain: INTEGER,
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
     await queryInterface.dropTable('books');
  }
};

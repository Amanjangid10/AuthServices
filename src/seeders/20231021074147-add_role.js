'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert('roles', [
      {
        name: 'ADMIN',
        CreatedAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'CUSTOMER',
        CreatedAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'AIRLINE_BUISNESS',
        CreatedAt: new Date(),
        updatedAt:new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

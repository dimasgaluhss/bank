'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let Customers = [{
    identityNumber: '7483056445389012',
    fullName: 'John Doe',
    address: 'Boulevard st',
    birthDate: new Date(11-12-2001),
    gender: 'Male',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    identityNumber: '7594530900127659',
    fullName: 'Miche Sauwitz',
    address: 'St. Nick st',
    birthDate: new Date(12-11-1999),
    gender: 'Female',
    createdAt: new Date(),
    updatedAt: new Date()
  }]

  return queryInterface.bulkInsert('Customers', Customers, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Customers', null, {})
  }
};

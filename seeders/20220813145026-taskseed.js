'use strict';
const fs = require('fs');
const { identity } = require('lodash');

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const task = JSON.parse(fs.readFileSync("./data/tasks.json", "utf-8"))
   .map(el=>{
    el.createdAt = new Date()
    el.updatedAt = new Date()
    delete el.id
    return el
   })
   return queryInterface.bulkInsert('Tasks', task, {});
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Task', null, {});
  }
};

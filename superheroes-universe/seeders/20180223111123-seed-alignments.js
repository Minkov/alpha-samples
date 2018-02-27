const {
  superheroesData,
} = require('./data/seed-1.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alignments', [{
      name: 'Good',
      updatedAt: new Date(),
    }, {
      name: 'Evil',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Neutral',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
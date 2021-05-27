'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'users',
        'gender', {
            allowNull: true,
            type: Sequelize.STRING,
        },
    ),
    down: (queryInterface, Sequelize) => queryInterface.removeColumn(
        'users',
        'gender', {
            allowNull: true,
            type: Sequelize.STRING,
        })
}
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'users',
        'datebirthday', {
            allowNull: true,
            type: Sequelize.STRING,
        }
    ),
    down: (queryInterface, Sequelize) => queryInterface.removeColumn(
        'users',
        'datebirthday', {
            allowNull: true,
            type: Sequelize.STRING,
        }
    )
}
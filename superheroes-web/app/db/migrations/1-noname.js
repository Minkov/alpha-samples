'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Alignments", deps: []
 * createTable "PowerTypes", deps: []
 * createTable "Factions", deps: [Alignments]
 * createTable "Powers", deps: [PowerTypes]
 * createTable "Superheros", deps: [Alignments]
 * createTable "SuperheroesPowers", deps: [Superheros, Powers]
 *
 **/

const info = {
    'revision': 1,
    'name': 'noname',
    'created': '2018-03-09T08:59:20.499Z',
    'comment': '',
};

const migrationCommands = [{
        fn: 'createTable',
        params: [
            'Alignments',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING,
                    'allowNull': false,
                    'unique': true,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'PowerTypes',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING(3).BINARY,
                    'allowNull': false,
                    'unique': true,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Factions',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING,
                    'allowNull': false,
                    'unique': true,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'AlignmentId': {
                    'type': Sequelize.INTEGER,
                    'onUpdate': 'CASCADE',
                    'onDelete': 'CASCADE',
                    'references': {
                        'model': 'Alignments',
                        'key': 'id',
                    },
                    'allowNull': false,
                },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Powers',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING(3).BINARY,
                    'allowNull': false,
                    'unique': true,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'PowerTypeId': {
                    'type': Sequelize.INTEGER,
                    'onUpdate': 'CASCADE',
                    'onDelete': 'SET NULL',
                    'references': {
                        'model': 'PowerTypes',
                        'key': 'id',
                    },
                    'allowNull': true,
                },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Superheros',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING(3).BINARY,
                    'allowNull': false,
                    'unique': true,
                },
                'secretIdentity': {
                    'type': Sequelize.STRING,
                    'allowNull': false,
                    'unique': true,
                },
                'story': {
                    'type': Sequelize.STRING,
                    'validate': {
                        'notEmpty': true,
                    },
                    'allowNull': false,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'AlignmentId': {
                    'type': Sequelize.INTEGER,
                    'onUpdate': 'CASCADE',
                    'onDelete': 'CASCADE',
                    'references': {
                        'model': 'Alignments',
                        'key': 'id',
                    },
                    'allowNull': false,
                },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'SuperheroesPowers',
            {
                'SuperheroId': {
                    'type': Sequelize.INTEGER,
                    'allowNull': true,
                    'onUpdate': 'CASCADE',
                    'onDelete': 'CASCADE',
                    'references': {
                        'model': 'Superheros',
                        'key': 'id',
                    },
                    'unique': 'SuperheroesPowers_PowerId_SuperheroId_unique',
                    'primaryKey': true,
                },
                'PowerId': {
                    'type': Sequelize.INTEGER,
                    'allowNull': true,
                    'onUpdate': 'CASCADE',
                    'onDelete': 'CASCADE',
                    'references': {
                        'model': 'Powers',
                        'key': 'id',
                    },
                    'unique': 'SuperheroesPowers_PowerId_SuperheroId_unique',
                    'primaryKey': true,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
            },
            {},
        ],
    },
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize) {
        let index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    const command = migrationCommands[index];
                    console.log('[#'+index+'] execute: ' + command.fn);
                    index++;
                    queryInterface[command.fn](...command.params).then(next, reject);
                } else {
resolve();
}
            }
            next();
        });
    },
    info: info,
};

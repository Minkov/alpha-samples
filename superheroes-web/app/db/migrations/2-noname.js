'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "name" on table "Powers"
 * changeColumn "name" on table "PowerTypes"
 * changeColumn "name" on table "Superheros"
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2018-03-09T09:01:14.212Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Powers",
            "name",
            {
                "type": Sequelize.STRING(60),
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "PowerTypes",
            "name",
            {
                "type": Sequelize.STRING(60),
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Superheros",
            "name",
            {
                "type": Sequelize.STRING(60),
                "allowNull": false,
                "unique": true
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};

'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "secretIdentity" on table "Superheros"
 * changeColumn "secretIdentity" on table "Superheros"
 * changeColumn "name" on table "Superheros"
 * changeColumn "name" on table "Superheros"
 *
 **/

var info = {
    "revision": 6,
    "name": "superhero-name-and-secretIdentity-is-not-null-final",
    "created": "2018-02-23T09:26:30.927Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Superheros",
            "secretIdentity",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "notNull": true,
                    "isNull": false
                },
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Superheros",
            "secretIdentity",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "notNull": true,
                    "isNull": false
                },
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
                "type": Sequelize.STRING,
                "validate": {
                    "notNull": true,
                    "isNull": false
                },
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
                "type": Sequelize.STRING,
                "validate": {
                    "notNull": true,
                    "isNull": false
                },
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

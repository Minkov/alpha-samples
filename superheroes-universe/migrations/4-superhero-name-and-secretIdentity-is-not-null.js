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
    "revision": 4,
    "name": "superhero-name-and-secretIdentity-is-not-null",
    "created": "2018-02-23T09:23:35.151Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Superheros",
            "secretIdentity",
            {
                "type": Sequelize.STRING,
                "unique": true,
                "notNull": true
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
                "unique": true,
                "notNull": true
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
                "unique": true,
                "notNull": true
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
                "unique": true,
                "notNull": true
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

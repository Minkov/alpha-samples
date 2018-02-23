'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "story" to table "Superheros"
 * changeColumn "name" on table "Superheros"
 *
 **/

var info = {
    "revision": 8,
    "name": "superhero-has-not-empty-story-and-and-validation-for-name",
    "created": "2018-02-23T09:57:39.647Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Superheros",
            "story",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "notEmpty": true
                },
                "allowNull": false
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
                    "len": [3, 60]
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

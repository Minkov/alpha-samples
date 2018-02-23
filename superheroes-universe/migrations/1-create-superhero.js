'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Superheros", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2018-02-23T09:02:46.786Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Superheros",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "name": {
                "type": Sequelize.STRING
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function (queryInterface, Sequelize) {
        var index = this.pos;
        return new Promise(function (resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    console.log("[#" + index + "] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                } else
                    resolve();
            }
            next();
        });
    },
    info: info
};
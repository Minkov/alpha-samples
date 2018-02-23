'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "secretIdentity" to table "Superheros"
 *
 **/

var info = {
    "revision": 2,
    "name": "superhero-has-secretIdentity",
    "created": "2018-02-23T09:15:15.478Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Superheros",
        "secretIdentity",
        {
            "type": Sequelize.STRING
        }
    ]
}];

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

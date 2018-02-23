'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "SuperheroId" to table "Alignments"
 *
 **/

var info = {
    "revision": 12,
    "name": "superhero-has-alignment",
    "created": "2018-02-23T10:09:55.001Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Alignments",
        "SuperheroId",
        {
            "type": Sequelize.INTEGER,
            "onUpdate": "CASCADE",
            "onDelete": "SET NULL",
            "references": {
                "model": "Superheros",
                "key": "id"
            },
            "allowNull": true
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

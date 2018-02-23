'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "AlignmentId" to table "Superheros"
 *
 **/

var info = {
    "revision": 22,
    "name": "qwe",
    "created": "2018-02-23T11:00:44.559Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Superheros",
        "AlignmentId",
        {
            "type": Sequelize.INTEGER,
            "onUpdate": "CASCADE",
            "onDelete": "CASCADE",
            "references": {
                "model": "Alignments",
                "key": "id"
            },
            "allowNull": false
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

'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "SuperheroId" from table "Alignments"
 * addColumn "AlignmentId" to table "Superheros"
 *
 **/

var info = {
    "revision": 11,
    "name": "superhero-has-alignment",
    "created": "2018-02-23T10:08:02.306Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Alignments", "SuperheroId"]
    },
    {
        fn: "addColumn",
        params: [
            "Superheros",
            "AlignmentId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "Alignments",
                    "key": "id"
                },
                "allowNull": true
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

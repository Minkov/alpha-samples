'use strict';
module.exports = (sequelize, DataTypes) => {
    const SuperheroesPowers = sequelize.define('SuperheroesPowers', {
        SuperheroId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        PowerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    }, {});
    SuperheroesPowers.associate = (models) => {
        const {
            Superhero,
            Power,
        } = models;

        SuperheroesPowers.belongsTo(Superhero);
        SuperheroesPowers.belongsTo(Power);
    };

    return SuperheroesPowers;
};

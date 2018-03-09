'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faction = sequelize.define('Faction', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {});
  Faction.associate = (models) => {
    const {
      Alignment,
    } = models;

    Faction.belongsTo(Alignment, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return Faction;
};

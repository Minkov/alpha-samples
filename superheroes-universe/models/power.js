'use strict';
module.exports = (sequelize, DataTypes) => {
  const Power = sequelize.define('Power', {
    name: {
      type: DataTypes.STRING(3, 60),
      unique: true,
      allowNull: false,
    },
  }, {});
  Power.associate = (models) => {
    const {
      PowerType,
    } = models;

    Power.belongsTo(PowerType);
  };
  
  return Power;
};
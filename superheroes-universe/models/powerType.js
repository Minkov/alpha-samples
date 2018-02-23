'use strict';
module.exports = (sequelize, DataTypes) => {
  const PowerType = sequelize.define('PowerType', {
    name: {
      type: DataTypes.STRING(3, 60),
      unique: true,
      allowNull: false,
    },
  }, {});
  PowerType.associate = (models) => {};
  return PowerType;
};
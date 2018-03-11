'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alignment = sequelize.define('Alignment', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {});
  Alignment.associate = (models) => {
    // associations can be defined here
  };
  return Alignment;
};

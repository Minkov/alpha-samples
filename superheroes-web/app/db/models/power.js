'use strict';
module.exports = (sequelize, DataTypes) => {
  const Power = sequelize.define('Power', {
    name: {
      /* eslint-disable */
      type: DataTypes.STRING(60),
      /* eslint-enable */
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

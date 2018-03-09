'use strict';
module.exports = (sequelize, DataTypes) => {
  const PowerType = sequelize.define('PowerType', {
    name: {
      /* eslint-disable */
      type: DataTypes.STRING(60),
      /* eslint-enable */
      unique: true,
      allowNull: false,
    },
  }, {});
  PowerType.associate = (models) => {};
  return PowerType;
};

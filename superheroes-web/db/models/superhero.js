'use strict';
module.exports = (sequelize, DataTypes) => {
  const Superhero = sequelize.define('Superhero', {
    name: {
      /* eslint-disable */
      type: DataTypes.STRING(60),
      /* eslint-enable */
      unique: true,
      allowNull: false,
    },
    secretIdentity: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  Superhero.associate = (models) => {
    const {
      Alignment,
      Power,
      SuperheroesPowers,
    } = models;

    /** wrong **/
    // Superhero.hasOne(Alignment);
    // Alignment.hasMany(Superhero);

    Superhero.belongsTo(Alignment, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Superhero.belongsToMany(Power, {
      through: SuperheroesPowers,
    });

    Power.belongsToMany(Superhero, {
      through: SuperheroesPowers,
    });
  };

  return Superhero;
};

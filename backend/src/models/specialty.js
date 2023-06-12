'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialty.belongsTo(models.Allcode, { foreignKey: 'specialty', targetKey: 'keyMap', as: 'specialtyName' });
    }
  }
  Specialty.init(
    {
      specialty: DataTypes.STRING,
      contentHTML: DataTypes.TEXT('long'),
      contentMarkdown: DataTypes.TEXT('long'),
      doctorId: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Specialty',
    },
  );
  return Specialty;
};

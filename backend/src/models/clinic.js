'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      clinicId: DataTypes.STRING,
      address: DataTypes.STRING,
      contentMarkdown: DataTypes.TEXT('long'),
      contentHTML: DataTypes.TEXT('long'),
      image: DataTypes.STRING,
      doctorId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Clinic',
    },
  );
  return Clinic;
};

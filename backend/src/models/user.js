'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // 1 - 1 : positionId and gender of Allcode is listed in keyMap in AllCodes => Allcode belong to allCode
      // Allcode.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
      // Allcode.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
      // // 1 - 1 : 1 Allcode has one doctorId -> which is listed in Markdown
      // Allcode.hasOne(models.Markdown, { foreignKey: 'doctorId' });
      // Allcode.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });
      // Allcode.hasMany(models.Schedule, {
      //   foreignKey: 'doctorId',
      //   as: 'doctorData',
      // });
    }
  }
  Allcode.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Allcode',
    },
  );
  return Allcode;
};

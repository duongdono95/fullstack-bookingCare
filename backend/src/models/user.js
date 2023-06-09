'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // 1 - 1 : positionId and gender of user is listed in keyMap in AllCodes => user belong to allCode
      User.belongsTo(models.Allcode, { foreignKey: "roleId", targetKey: "keyMap", as: 'roleId' });
      // User.belongsTo(models.Allcode, { foreignKey: "positionId", targetKey: "keyMap", as: 'positionData' });
      // User.belongsTo(models.Allcode, { foreignKey: "gender", targetKey: "keyMap", as: 'genderData' });
      // // 1 - 1 : 1 user has one doctorId -> which is listed in Markdown
      // User.hasOne(models.Markdown, { foreignKey: "doctorId" })

      // User.hasOne(models.Doctor_Infor, { foreignKey: "doctorId" })
      // User.hasMany(models.Schedule, {
      //   foreignKey: 'doctorId', as: 'doctorData'
      // })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING,
    image: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
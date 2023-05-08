const S = require("sequelize");
const db = require("../index");
// const bc=require('bcrypt')

class User extends S.Model {}

User.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    edad: {
      type: S.STRING,
      require: true,
    },
    password: {
      type: S.STRING,
      require: true,
    },
  },
  { sequilize: db, modelName: "User" }
);

module.exports = User;

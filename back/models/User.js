const S = require("sequelize");
const db = require("../db");
const bc = require("bcrypt");

class User extends S.Model {
  createHash(password, string) {
    return bc.hash(password, string);
  }
  validatePassword(string) {
    return this.createHash(string, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

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
    salt: { type: S.STRING },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeValidate", (user) => {
  const salt = bc.genSaltSync();
  user.salt = salt;
  return user
    .createHash(user.password, user.salt)
    .then((result) => (user.password = result))
    .catch((err) => console.log(err));
});

module.exports = User;

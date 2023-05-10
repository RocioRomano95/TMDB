Users.belongsToMany(Favorites, { through: "favUser" });

const Sequelize = require("sequelize");
const db = require("../db");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    poster: {
      type: Sequelize.STRING,
      /* defaultValue:noImg */
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;

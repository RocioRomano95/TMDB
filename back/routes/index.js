const express = require("express");
const router = express.Router();
const User = require("../models");

// router.get("/", (req, res, next) => {
//   res.status(200).send("Llegue a la ruta");
// });

router.post("/signup", (req, res) => {
  User.create(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.send(error));
});

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) res.status(401).send("no existe el usuario");
    user.validatePassword(password).then((result) => {
      if (result) {
        res.status(200).send(user);
      } else
        res
          .status(401)
          .send("error no esta el result por la validacion de password");
    });
  });
});

module.exports = router;

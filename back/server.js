const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
});

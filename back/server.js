const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api", routes);

const PORT = process.env.PORT || 3001;
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});

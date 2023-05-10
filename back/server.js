const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const models = require("./models/index");
const db = require("./db");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({ origin: `http://localhost:3000`, credentials: true }));

app.use("/api", routes);
const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});

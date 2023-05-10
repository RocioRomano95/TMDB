const jwt = require("jsonwebtoken");
const SECRET = "secret";

function generateToken(payload) {
  return (token = jwt.sign({ user: payload }, SECRET, { expiresIn: "1h" }));
}

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

function validateAuth(req, res) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;
  return user;
}

module.exports = { generateToken, validateToken, validateAuth };

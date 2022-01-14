const register = (req, res, next) => {
  res.status(201).json({ "message": "user created" });
}

module.exports = register;

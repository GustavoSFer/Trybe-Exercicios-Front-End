const user = (req, res, next) => {
    const { userName } = req.body;
  
    if (!userName || userName.length < 3) {
      return res.status(400).json({ message: 'ivalid data' });
    }
    next();

  }

  const validEmail = (req, res, next) => {
    const { email } = req.body;

    if (!email || !email.includes('@') || !email.includes('.com')) {
      return res.status(400).json({ message: 'invalid email'});
    }

    next();
  }

  const validPassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 3 || password.length > 8) {
      return res.status(400).json({ message: 'invalid password'})
    }
    next();
  }

module.exports = {
  user,
  validEmail,
  validPassword,
};

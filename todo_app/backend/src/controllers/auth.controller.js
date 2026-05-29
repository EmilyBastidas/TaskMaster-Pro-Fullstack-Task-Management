const authService = require("../services/auth.services");

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);

    res.json({ token });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};

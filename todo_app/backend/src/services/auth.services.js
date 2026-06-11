const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pool = require("../db/connection");

const register = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await pool.query(
    "SELECT id FROM users WHERE email = $1",
    [email],
  );

  if (existingUser.rows.length > 0) {
    throw new Error("Email en uso, por favor verifiquelo");
  }
  const result = await pool.query(
    `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING id, email
    `,
    [email, hashedPassword],
  );

  return result.rows[0];
};

const login = async ({ email, password }) => {
  const result = await pool.query(
    `
    SELECT * FROM users
    WHERE email = $1
    `,
    [email],
  );

  if (result.rows.length === 0) {
    throw new Error("Usuario no encontrado");
  }

  const user = result.rows[0];

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Contraseña inválida");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  return token;
};

module.exports = {
  register,
  login,
};

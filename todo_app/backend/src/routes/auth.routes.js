const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

/*console.log("REGISTER ROUTE ACTIVE");

const express = require("express");
const router = express.Router();

console.log("AUTH ROUTES LOADED");

router.post("/register", (req, res) => {
  return res.json({
    message: "register works",
  });
});

router.post("/login", (req, res) => {
  return res.json({
    message: "login works",
  });
});

module.exports = router;*/

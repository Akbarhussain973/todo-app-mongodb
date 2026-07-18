const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/userController");
const validateRegister = require("../middleware/validateRegister");
const validateLogin = require("../middleware/validateLogin");
const catchAsync = require("../utils/catchAsync");

router
  .route("/register")
  .get(userController.renderRegisterForm)
  .post(validateRegister, catchAsync(userController.registerUser));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    validateLogin,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginUser,
  );

router.post("/logout", userController.logoutUser);

module.exports = router;

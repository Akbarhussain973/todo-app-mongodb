const User = require("../models/User");

exports.renderRegisterForm = (req, res) => {
  res.render("users/register", { title: "Register" });
};

exports.registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = new User({ email });

  const registeredUser = await User.register(user, password);

  req.login(registeredUser, (err) => {
    if (err) return next(err);

    req.flash("success", "Welcome to Todo App!");
    res.redirect("/todos");
  });
};

exports.renderLoginForm = (req, res) => {
  res.render("users/login", { title: "Login" });
};

exports.loginUser = (req, res) => {
  req.flash("success", "Welcome back!");
  res.redirect("/todos");
};

exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.flash("success", "Successfully logged out!");
    res.redirect("/login");
  });
};

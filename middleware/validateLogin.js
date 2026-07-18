const { loginSchema } = require("../schemas");

module.exports = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    req.flash("error", error.details[0].message);
    return res.redirect("/login");
  }

  next();
};

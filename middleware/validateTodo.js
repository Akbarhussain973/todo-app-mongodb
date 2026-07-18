const { todoSchema } = require("../schemas");

module.exports = (req, res, next) => {
  const { error } = todoSchema.validate(req.body);

  if (error) {
    req.flash("error", error.details[0].message);
    return res.redirect("/todos");
  }

  next();
};

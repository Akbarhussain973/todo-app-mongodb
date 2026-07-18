const { editTodoSchema } = require("../schemas");

module.exports = (req, res, next) => {
  const { error } = editTodoSchema.validate(req.body);

  if (error) {
    req.flash("error", error.details[0].message);
    return res.redirect(`/todos/${req.params.id}/edit`);
  }

  next();
};

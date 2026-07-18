const Joi = require("joi");

module.exports.todoSchema = Joi.object({
  todo: Joi.string().trim().min(1).required(),
});

module.exports.editTodoSchema = Joi.object({
  description: Joi.string().trim().min(1).required(),
});

module.exports.registerSchema = Joi.object({
  username: Joi.string().trim().min(3).max(30).required(),

  email: Joi.string().trim().email().required(),

  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one letter and one number.",
    }),
});

module.exports.loginSchema = Joi.object({
  email: Joi.string().trim().required(),

  password: Joi.string().required(),
});

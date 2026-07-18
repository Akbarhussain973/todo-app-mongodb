require("dotenv").config();
const express = require("express");
const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");
const todoRoutes = require("./routes/todo");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const passport = require("passport");
const session = require("express-session");
const User = require("./models/User");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError");
const helmet = require("helmet");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error(err);
    console.error(err.stack);
  });

app.use(
  session({
    secret: process.env.SECRET || "ThisIsASecret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
      },
    },
  }),
);

app.get("/", (req, res) => {
  res.redirect("/todos");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.use("/", userRoutes);
app.use("/todos", todoRoutes);

app.all("/*splat", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;

  res.status(statusCode).render("error", {
    title: "Error",
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

var express = require("express");
var router = express.Router();
var passport = require("passport");
var Board = require('../models/board')

router.get('/', async function index(req, res) {
  const boards = await Board.find({});
  return res.render("index", { title: "Home", boards });
})

router.get(
  "/oauth/google",
  passport.authenticate(
    //which passport stragety is being used?
    "google",
    //config obj
    {
      scope: ["profile", "email"],
      //optional, if your browser has multiple acc to choose from
      prompt: "select_account",
    }
  )
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    //Change whats best for your app
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    //change path for your desire
    res.redirect("/");
  });
});
module.exports = router;

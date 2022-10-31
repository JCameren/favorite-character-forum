var express = require("express");
var router = express.Router();
var boardsCtrl = require("../controllers/boards");
var ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/new", ensureLoggedIn, boardsCtrl.new);

router.get('/:id/topics', boardsCtrl.index)

router.post("/", boardsCtrl.create);

module.exports = router;
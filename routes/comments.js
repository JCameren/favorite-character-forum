var express = require("express");
var router = express.Router();
var commentssCtrl = require("../controllers/comments");
var ensureLoggedIn = require("../config/ensureLoggedIn");

router.delete('/comments/:id', ensureLoggedIn, commentssCtrl.delete)

// router.get('/comments/:id/edit', ensureLoggedIn, commentssCtrl.edit)


module.exports = router
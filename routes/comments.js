var express = require("express");
var router = express.Router();
var commentssCtrl = require("../controllers/comments");
var ensureLoggedIn = require("../config/ensureLoggedIn");

router.delete('/comments/:id', ensureLoggedIn, commentssCtrl.delete)

router.put('/comments/:id', ensureLoggedIn, commentssCtrl.update)

router.get('/comments/:id/edit', ensureLoggedIn, commentssCtrl.edit)


module.exports = router
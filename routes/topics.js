var express = require("express");
var router = express.Router();
var topicsCtrl = require("../controllers/topics");
var ensureLoggedIn = require("../config/ensureLoggedIn");

router.get('/boards/:id/topics/new', ensureLoggedIn, topicsCtrl.new)

router.get('/topics/:id/edit', ensureLoggedIn, topicsCtrl.edit)

router.get('/boards/:id/topics/:topicId', topicsCtrl.show)

router.post('/boards/:id/topics', ensureLoggedIn, topicsCtrl.create)

router.post('/topics/:id/comment', ensureLoggedIn, topicsCtrl.createComment)

router.put('/topics/:id', ensureLoggedIn, topicsCtrl.update)

router.delete('/boards/:id/topics/:topicId', ensureLoggedIn, topicsCtrl.delete)


module.exports = router
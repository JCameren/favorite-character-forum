const Topic = require("../models/topic");

module.exports = {
  delete: deleteComment,
  edit,
  update
};

async function edit(req, res) {
  //finds topic with matching comment id
  const topic = await Topic.findOne({"comments._id": req.params.id});
  const comment = topic.comments.id(req.params.id)
  console.log(comment)
  res.render('comments/edit', {comment, title: 'Edit Comment'})
}

async function update(req, res) {
  const topic = await Topic.findOne({"comments._id": req.params.id})
  const comment = topic.comments.id(req.params.id)
  if (!comment.user.equals(req.user._id)) return res.redirect('/')
  comment.post = req.body.post
  console.log('Updated comment:', comment.post)
  topic.save(function(err) {
    return res.redirect(`/boards/${topic.board}/topics/${topic._id}`)
  })
}

function deleteComment(req, res, next) {
  Topic.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id,
  }).then(function (topic) {
    if (!topic) return res.redirect(`/boards/${topic.board}`);
    topic.comments.remove(req.params.id);
    topic
      .save()
      .then(function () {
        res.redirect(`/boards/${topic.board}/topics/${topic._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}

// asunc function update(req, res) {
//   const topic = await Topic.findOne('comments._id': req.params.id)
// }

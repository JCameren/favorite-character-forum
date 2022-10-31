const Topic = require("../models/topic");

module.exports = {
  delete: deleteComment,
//   edit,
};

// async function edit(req, res) {
//   const comment = await Topic.findOne({
//     "comments._id": req.params.id,
//   });
// }

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

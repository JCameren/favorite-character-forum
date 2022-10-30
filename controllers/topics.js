const Topic = require("../models/topic");
const Board = require("../models/board");

module.exports = {
  new: newTopic,
  create,
  createComment,
  show,
};

async function newTopic(req, res) {
  const board = await Board.findById(req.params.id);
  return res.render("topics/new", { title: "New Topic", board });
}

function create(req, res) {
  req.body.board = req.params.id;
  req.body.user = req.user.id;
  console.log(req.body);
  const topic = new Topic(req.body);
  console.log(topic);
  topic.save(function (err, topic) {
    Board.findById(req.params.id, function (err, board) {
      board.topics.push(topic._id);
      board.save(function (err) {
        if (err) {
          console.log(err);
          res.redirect(`/boards/${req.params.id}/topics/new`);
        }
        res.redirect(`/boards/${req.params.id}/topics`);
      });
    });
  });
}

async function createComment(req, res) {
    req.body.user = req.user.id
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    Topic.findById(req.params.id, function(err, topic) {
        topic.comments.push(req.body)
        topic.save(function(err) {
          if(err) {
            console.log(err)
            return res.redirect(`/boards/${topic.board}/topics/${req.params.id}`)
          }
            res.redirect(`/boards/${topic.board}/topics/${req.params.id}`)
        })
    })
    // Board.findById(req.params.id, function (err, board) {
    //     Topic.find({ board: req.params.id }, function (err, topics) {
    //       res.render("boards/index", {
    //         title: board.title,
    //         board,
    //         topics,
    //       });
    //     });
    //   });
}

async function show(req, res) {
  const topic = await Topic.findById(req.params.topicId);
  return res.render("topics/show", { title: topic.name, topic });
}

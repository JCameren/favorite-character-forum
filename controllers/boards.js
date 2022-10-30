const Board = require("../models/board");
const Topic = require("../models/topic");

module.exports = {
  new: newBoard,
  create,
  index,
};

function newBoard(req, res) {
  return res.render("boards/new", { title: "New Board" });
}

function create(req, res) {
  const board = new Board(req.body);
  board.save(function (err) {
    if (err) return res.redirect("/boards/new");
    console.log(board);
    res.redirect(`/`);
  });
}

function index(req, res) {
  // const board = await Board.findById(req.params.id);
  // return res.render("boards/index", { title: board.title, board });
  Board.findById(req.params.id, function (err, board) {
    Topic.find({ board: req.params.id }, function (err, topics) {
      res.render("boards/index", {
        title: board.title,
        board,
        topics,
      });
    });
  });
}

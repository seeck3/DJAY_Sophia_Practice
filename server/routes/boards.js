const express = require('express');
const { uuid } = require('uuidv4');
const router = express.Router();

const Board = require('../models/Boards');

// @route POST api/board
// @desc Create a board
// @access public
router.post('/', async (req, res) => {
  try {
    const text = 'creating board';
    console.log(req.body);
    const newBoard = new Board({
      id: uuid(),
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      createdOn: new Date(),
    });

    const board = await newBoard.save();
    res.json(board);
  } catch (error) {
    console.error('error : ', error);
  }
});

module.exports = router;

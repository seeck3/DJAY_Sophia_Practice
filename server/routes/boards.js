const express = require('express');
const { uuid } = require('uuidv4');
const router = express.Router();

const Board = require('../models/Boards');

// @route GET api/board
// @desc Get all board
// @access public
router.get('/', async (req, res) => {
  try {
    const boards = await Board.find({}).sort({ date: -1 });

    res.json(boards);
  } catch (error) {
    console.error('error : ', error);
    res.status(500).send('Server Error');
  }
});

// @route POST api/board
// @desc Create a board
// @access public
router.post('/', async (req, res) => {
  try {
    const text = 'creating board';
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
    res.status(500).send('Server Error');
  }
});

module.exports = router;

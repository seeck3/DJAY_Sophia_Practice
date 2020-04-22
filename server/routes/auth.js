const express = require('express');
const { uuid } = require('uuidv4');
const config = require('config');
const jwt = require('jsonwebtoken');
const jwtKey = config.get('secret');
const router = express.Router();

const passport = require('passport');

const auth = require('../middleware/auth');

// Request Validate
const { check, validationResult } = require('express-validator');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/login
// @desc Login user
// @access public

router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter password').isLength(1),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log('auth before passport');
    try {
      passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(500).json({ errors: [err] });
        if (info) return res.status(500).json({ errors: [info] });
        console.log('auth in passport authenticate');
        const payload = {
          user: {
            id: user.id,
          },
        };
        const expiresIn = '1d';
        jwt.sign(payload, jwtKey, { expiresIn: expiresIn }, (err, token) => {
          if (err) throw err;
          req.login(user, (err) => {
            if (err) return next(err);

            res.json({ token, expires: expiresIn });
          });
        });
      })(req, res, next);
    } catch (error) {
      console.error('error : ', error);
    }
  }
);

router.get('/logoff', async (req, res, next) => {
  try {
    console.log('header', req.header('x-auth-token'));
    console.log('session', req.user);
    const decode = jwt.verify(req.header('x-auth-token'), jwtKey);

    console.log('decode', decode);
    // req.logout();
    res.json('logoff');
  } catch (error) {
    console.error('error : ', error);
  }
});

module.exports = router;

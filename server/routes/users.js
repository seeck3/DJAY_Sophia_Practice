const express = require('express');
const { uuid } = require('uuidv4');
const bycrypt = require('bcryptjs');
const router = express.Router();

// Request Validate
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');
/**
 * @swagger
 *
 * /api/user/register:
 *   post:
 *     description: Register to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: First name to use for register.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: Last name to use for register.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: Email to use for register.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: Password to use for register.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: register
 */
router.post(
  '/register',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter more than 8 characters').isLength(8),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log('errors', errors);
    console.log('req.body', req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: 'email already exists' }] });
      user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      //   Encrypt password
      const salt = await bycrypt.genSalt(10);

      user.password = await bycrypt.hash(password, salt);
      user.save();
      res.json(user);
    } catch (error) {
      console.error('error : ', error);
    }
  }
);

module.exports = router;

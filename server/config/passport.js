const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const config = require('config');
const jwtKey = config.get('secret');

const chalk = require('chalk');

// User Model
const User = require('../models/Users');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtKey,
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  const user = User.findOne({ _id: payload.user.id }).catch((err) =>
    done(err, null)
  );
  if (user) return done(null, user);
  if (!user) return done(null, false);
});

const localStrategy = new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      console.log('auth in passport');
      // Match User
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { msg: 'email is not registered' });

      // Match Password
      const isMatch = await bycrypt.compare(password, user.password);

      if (!isMatch)
        return done(null, false, { msg: 'password does not match' });

      return done(null, user);
    } catch (error) {
      console.log('error : ', error);
      done(error);
    }
  }
);

module.exports = function (passport) {
  passport.use(jwtStrategy);
  passport.use(localStrategy);

  passport.serializeUser((user, done) => {
    console.log('auth in serializeUser');
    // console.log('serializeUser', user);
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log('deserializeUser', id);
    User.findById(id, (err, user) => done(err, user));
  });
};

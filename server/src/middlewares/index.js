const passport = require('passport');

module.exports = {
  isAuthenticated: (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
      if (err || !user) {
        res.status(403).send({
          error: 'You Shall not Pass',
        });
      } else {
        req.user = user;
        next();
      }
    })(req, res, next);
  },
};

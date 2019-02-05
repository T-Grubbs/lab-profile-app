const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
          res.json({ message: 'Something went wrong authenticating user' });
          return;
      }
  
      if (!theUser) {
          // "failureDetails" contains the error messages
          // from our logic in "LocalStrategy" { message: '...' }.
          res.json(failureDetails);
          return;
      }

      // save user in session
      req.login(theUser, (err) => {
          if (err) {
              res.json({ message: 'Session save went bad.' });
              return;
          }

          // We are now logged in (that's why we can also send req.user)
          res.json(theUser);
      });
  })(req, res, next);
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, theUser, failureDetails) => {
		if (err) {
			res.json({ message: 'Something went wrong authenticating user' });
			return;
		}

		if (!theUser) {
			res.json(failureDetails);
			return;
		}

		req.login(theUser, (err) => {
			if (err) {
				res.json({ message: 'Session save went bad.' });
				return;
			}

			res.json(theUser);
			console.log(theUser);
		});
	})(req, res, next);
});

module.exports = router;

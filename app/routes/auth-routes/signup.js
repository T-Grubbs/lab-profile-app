const express = require('express');
const router  = express.Router();

router.post('/signup', (req, res, next) => {
    res.render('signup');
});

module.exports = router;
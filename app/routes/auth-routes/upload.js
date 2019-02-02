const express = require('express');
const router  = express.Router();

router.post('/upload', (req, res, next) => {
    res.render('upload');
});

module.exports = router;
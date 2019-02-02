const express = require('express');
const router  = express.Router();

router.get('/logout', (req, res, next) => {
    res.render(logout);
})

module.exports = router;
const express = require('express');
const router  = express.Router();

router.post('/edit', (req, res, next) =>{
    res.render('edit');
})

module.exports = router;
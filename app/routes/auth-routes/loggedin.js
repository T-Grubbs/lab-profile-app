const express = require('express');
const router  = express.Router(); 

router.get('/loggedin', (req, res, next) =>{
  res.render('loggedin');
})

module.exports = router;
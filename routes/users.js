var express = require('express');
const uuid = require('uuid');
var router = express.Router();

/* GET users checks cookie on request and verifies
   if it is valid or sends rel for registration */
router.get('/', function(req, res, next) {
  if(req.cookies.length == 0) {
    res.status(404).send("todo rel to registration");
  } else {
    //TODO check for an invalid cookie
    res.status(200).send("Registered");
  }
});

router.post('/', function(req, res, next){
  const newvoter = uuid();
  res.cookie('dcddfc-voter-reg', newvoter, {httpOnly: true});
  res.end("Welcome Voter");
});

module.exports = router;

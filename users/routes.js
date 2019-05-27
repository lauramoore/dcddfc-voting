var express = require('express');
const users = require('./users');
var router = express.Router();
const appCookieName = "dcddfc-voterid";
/* GET users checks cookie on request and verifies
   if it is valid or sends rel for registration */
router.get('/', function(req, res, next) {
    const currentid = resolveSessionId(req);
    if (currentid) {
       const curuser = users.find(currentid);
       if (curuser) {
         res.cookie("dcddfc-voterid", curuser.id, {httpOnly: true});
         res.status(200).send("Registered");
       } else {
         res.status(404);
       }
    } else {
      res.status(400).send("A User ID is Required");
    }
});

router.post('/', function(req, res, next){
  const currentid = resolveSessionId(req);
    const curuser = users.register(currentid);
    if (curuser) {
      res.cookie(appCookieName, curuser.id, {httpOnly: true});
      res.status(200).send("Registered");
    } else {
      res.status(500).send("Registration in error");
    }
});

function resolveSessionId(req, onSuccess) {
   if (req.cookies) {
      return req.cookies[appCookieName];
   }
   return false;
}

module.exports = router;

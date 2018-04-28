var router = require('express').Router();
var home = require('./controll_home');

//router.get('/', "");
router.get('/index', home.index);
router.post('/login', home.login);
router.get('/logout', home.logout);
module.exports = router;
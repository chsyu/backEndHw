var express = require('express'),
    index   = require('../controllers/index'),
    contact = require('../controllers/contact'),
    person  = require('../controllers/person'),
    router  = express.Router();

router.route('/contact').get(contact);
router.route('/contact/person').post(person);

module.exports = router;
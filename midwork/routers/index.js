var express = require('express'),
    record  = require('../controllers/record'),
    contact = require('../controllers/contact'),
    person  = require('../controllers/person'),
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),
    router  = express.Router();



router.route('/contact').get(contact);
router.route('/record').get(record);
router.route('/record/person')
  .post(create)
  .get(readall);
router.route('/record/person/:id')
  .get(read)
  .put(update)
  .delete(del);
module.exports = router;
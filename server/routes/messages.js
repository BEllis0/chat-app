const router = require('express').Router();
const messagesController = require('../controllers/messages.js');

router.get('/', messagesController.messages.get.all);
router.get('/:messageID', messagesController.messages.get.byUser);

router.post('/new', messagesController.messages.post);

router.put('/:messageID', messagesController.messages.put);

router.delete('/:messageID', messagesController.messages.delete);

module.exports = router;
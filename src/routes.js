const express = require('express');
const router = express.Router();
const viewController = require('./controllers/viewController');
const emailController = require('./controllers/emailController');

//Views
router.route('/').get(viewController.index);
router.route('/email').post(emailController.email);
module.exports = router;

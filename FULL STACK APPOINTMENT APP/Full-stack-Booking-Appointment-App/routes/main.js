const express = require('express');
const router = express.Router();
const path = require('path');

//const rootdir = require('../util/path');
const productsController = require('../controllers/mainController');

router.post('/forms',productsController.AddDetails);
router.get('/forms',productsController.getDetails);
router.delete('/forms/:id',productsController.deleteUser);
router.post('/forms/:id',productsController.editUser)

module.exports=router;

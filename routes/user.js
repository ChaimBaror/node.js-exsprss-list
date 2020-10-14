var express = require('express');
var router = express.Router();

const listController = require('../Controller/listController')
// const BookController = require('../Controller/BookConteroller');
// const validation = require('../middleware/validation_middleware');
// const Schemas = require('../Models/schema/schemas');


router.get('/' ,listController.index);

router.get('/add', listController.add_new_user_form);

// router.post('/add', validation(Schemas.Book) , BookController.add_new_book);

router.post('/add',listController.add_new_user);


router.get('/userpage/:id',listController.UserPage);


router.get('/delete/:id', listController.delete_the_user);

module.exports = router;
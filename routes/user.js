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


// router.get('/edit/:id', BookController.edit_book_form);

// router.post('/edit/:id', validation(Schemas.Book), BookController.update_book_data);

// router.get('/delete/:id', BookController.delete_the_book);

module.exports = router;
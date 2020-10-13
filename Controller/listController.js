const User = require('../Models/usersModels')


exports.index = async function (req, res) {

    let rows = [];
    // // Old way ES5
    // User.getAllList().then(function (rows) {
    //     res.render('Persons/list-Users', {
    //         title: 'List of Users',
    //         model: rows
    //     });
    // }).catch(function (err) {
    //     console.log(err.message)
    // });

    // New way ES6
    try {
        rows = await User.getAllList()
        // console.log(rows);
    } catch (error) {
        console.log(error.message)
    }

    res.render('Persons/list-Users', {
        title: 'List of Users',
        model: rows
    });
    console.log("listcontroller work");
}


exports.add_new_user_form = function (req, res) {
    res.render('Persons/add-User', {
        title: 'Add a new user'
    });
    console.log("add_new_user_form");
}


exports.add_new_user =  function (req, res) {
    console.log(req.body);
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const phone = req.body.phone;
    const EmailAddress = req.body.EmailAddress;

    try {
        User.addUser(LastName ,FirstName, EmailAddress, phone);
    } catch (error) {
        console.log(error.message)
    }

    res.redirect(`/listUsers`);

}
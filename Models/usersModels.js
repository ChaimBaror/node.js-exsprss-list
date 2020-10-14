const { db } = require('../data/config');


exports.getAllList = () => new Promise((resolve, reject) => {
    var sql_string = 'SELECT * FROM Persons';

    db.all(sql_string, [], (err, rows) => {
        if (err) {
            console.log(err.message);
            reject(err);
        }
        else {
            resolve(rows);
        }
    });
});

function getBook(id) {
    // let id = req.params.id;


    var sql_string = 'SELECT * FROM Persons WHERE PersonID=?';

    db.get(sql_string, id, (err, row) => {
        if (err)
            console.log(err.message);
        else {
            // res.render('books/edit-book',{ title: 'Edit the User', book: row});
        }
    });
}
let cunterId = 1
exports.addUser = (LastName, FirstName, EmailAddress, phone) => {
    cunterId++
    console.log("Add a new User request", LastName, FirstName, EmailAddress, phone);
    const sql = "INSERT INTO Persons (PersonID,LastName, FirstName, EmailAddress, phone) VALUES (?,?, ?,? , ?)";
    const book = [cunterId, LastName, FirstName, EmailAddress, phone];
    db.run(sql, book, err => {
        if (err) {
            console.error(err.message);
        }
    });
};


function editbook(id) {
    // let id = req.params.id;

    console.log(req.body);
    console.log(`Edit User with id ${id} request`);

    const sql = "UPDATE Persons SET LastName=? , FirstName = ? , EmailAddress = ? WHERE PersonID = ? ";
    const User = [req.body.Title, req.body.Author, req.body.Comments, id];

    db.run(sql, User, err => {
        if (err) {
            return console.error(err.message);
        }
    });

}

exports.getPage = (id) => new Promise((resolve, reject) => {
    console.log("way is not work");
    var sql_string = 'SELECT * FROM Persons WHERE PersonID=?';

    db.get(sql_string, id, (err, row) => {
        if (err) {
            console.log(err.message);
            reject(err)
        }
        else {
            resolve(row)
        }
    })
})



exports.deleteUser = function (u_id, res) {
    let id = u_id;

    const sql = "DELETE FROM Persons WHERE PersonID=?";

    db.run(sql, id, err => {
        if (err) {
            return console.error(err.message);
        }
        res.redirect(`/listUsers`);
    });

}

const pgp = require('pg-promise');

//const cn = {
//    host: '673a2a98-74c8-46f9-904b-f7d8b806dacf',
//    port: 5432,
//    database: '673a2a98-74c8-46f9-904b-f7d8b806dacf',
//    user: 'ijhvjdgf',
//    password: 'q2LjmBeKdDKD-ovwgkkJexd-cVys6OhX'
//};

var cn = 'postgres://ijhvjdgf:q2LjmBeKdDKD-ovwgkkJexd-cVys6OhX@tai.db.elephantsql.com:5432/ijhvjdgf';

const db = pgp(cn); // database instance;

// select and return a single user name from id:
db.one('SELECT name FROM users WHERE id = $1', [123])
    .then(user => {
        console.log(user.name); // print user name;
    })
    .catch(error => {
        console.log(error); // print the error;
    });

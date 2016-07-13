const arg = process.argv.slice(2)
const settings = require("./settings"); // settings.json
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : settings.hostname,
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    ssl      : true
  }
});


// var $1 = arg[0]

var query = knex.select('first_name', 'last_name' , 'birthdate').from('famous_people').where('first_name', arg[0]).orWhere('last_name', arg[0])


query.asCallback(function(err, rows) {
  if (err)  console.log(err);
  console.log(rows);
});
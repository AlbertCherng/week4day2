const firstname = process.argv[2];
const lastname = process.argv[3];
const birthdate = process.argv[4];
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

knex('famous_people').insert({first_name: firstname, last_name: lastname, birthdate: birthdate }).then(function(result) {
  console.log(result);
  process.exit();
})

const settings = require("../settings");
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


exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('milestones', function (table) {
    table.increments();
    table.string('description');
    table.date('date_achieved');
  })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('milestones')
  ])
};
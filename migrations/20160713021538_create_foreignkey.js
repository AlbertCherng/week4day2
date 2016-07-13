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
  knex.schema.table('milestones', function (table) {
    table.integer('famous_person_id');
    table.foreign('famous_person_id').references("famous_people.id");
  })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.table('milestones', function (table) {
    table.dropColumn('famous_person_id');
  })
  ])
};

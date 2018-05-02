
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('quotes', function(t) {
      t.increments();
      t.text('quote');
      t.timestamp('createdAt')
       .notNullable()
       .defaultTo(knex.fn.now());
      t.string('cite')
      t.string('date')
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('quotes');
};

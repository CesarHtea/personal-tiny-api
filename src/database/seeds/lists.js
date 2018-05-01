const data = [{
  name: 'FrontEnd Developers',
  } , {
  name: 'Golang Conference'
}]

exports.seed = function(knex, Promise) {
  return knex('lists').del()
    .then(function() {
      return knex('lists')
        .insert(data)
    });
}
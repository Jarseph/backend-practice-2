const knex = require("../db/connection");

const tableName = "customer";

function read(customer_id) {
  // Complete the implementation of this method.
  return knex(tableName)
    .select("*")
    .where('id', customer_id)
    .first()
}

function create(newCustomer) {
  // Complete the implementation of this method.
  return knex(tableName)
    .insert(newCustomer)
    .returning("*")
    .then((createdCustomer) => createdCustomer[0])
}

module.exports = {
  create,
  read,
};

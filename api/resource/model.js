// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const getById = (resource_id) => {
    return db("resources").where("resource_id", resource_id);
  };

const create = (resource) => {
  return db("resources")
    .insert(resource)
    .then((resource_id) => {
      return getById(resource_id);
    });
};

module.exports = {
  getAll,
  getById,
  create,
};

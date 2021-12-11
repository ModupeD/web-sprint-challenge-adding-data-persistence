const resources = [
  {
    resource_id: "1",
    resource_name: "git",
    resource_description: " github folder",
  },

  {
    resource_id: "2",
    resource_name: "java",
    resource_description: "java 2.0",
  },

  {
    resource_id: "3",
    resource_name: "python",
    resource_description: " python 6",
  },
];

exports.seed = async function (knex) {
  await knex("resources").truncate();
  await knex("resources").insert(resources);
};

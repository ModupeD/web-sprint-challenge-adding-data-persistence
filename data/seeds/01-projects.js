const projects = [
   {
    project_id: "1",
    project_name: "web48",
    project_description: "Build a github folder",
    project_completed: false,
    
   },
   
   {
    project_id: "2",
    project_name: "web49",
    project_description: "React",
    project_completed: false,
    
   },

   {
    project_id: "3",
    project_name: "web50",
    project_description: "Javascript",
    project_completed: false,
    
   },
   
]

exports.seed = async function (knex) {
    await knex("projects").truncate();
    await knex("projects").insert(projects);
  };
  
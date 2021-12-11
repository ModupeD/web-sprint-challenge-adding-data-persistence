const Project = require("./model");

const checkProjectsId = async (req, res, next) => {
  try {
    const project = await Project.getById(req.params.project_id);
    if (!project) {
      next({
        status: 404,
        message: `project with ${req.params.project_id} is not found`,
      });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkProjects = async (req, res, next) => {
  if (!req.body.project_id)
    return next({
      staus: 400,
      message: `project_id is missing`,
    });

  if (!req.body.project_name)
    return next({
      staus: 400,
      message: `project_name is missing`,
    });

  // if (!req.body.project_completed)
  // return next({
  //   staus: 400,
  //   message: `project_completed is missing`,
  //  });

  next();
};

module.exports = {
  checkProjectsId,
  checkProjects,
};

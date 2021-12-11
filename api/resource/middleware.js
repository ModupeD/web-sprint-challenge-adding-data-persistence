const Resource = require("./model");

const checkResourcesId = async (req, res, next) => {
  try {
    const resource = await Resource.getById(req.params.project_id);
    if (!resource) {
      next({
        status: 404,
        message: `project with ${req.params.resource_id} is not found`,
      });
    } else {
      req.resource = resource;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkResources = async (req, res, next) => {
  if (!req.body.resource_id)
    return next({
      staus: 400,
      message: `resource_id is missing`,
    });

  if (!req.body.resource_name)
    return next({
      staus: 400,
      message: `resource_name is missing`,
    });

  // if (!req.body.project_completed)
  // return next({
  //   staus: 400,
  //   message: `project_completed is missing`,
  //  });

  next();
};

module.exports = {
    checkResourcesId,
    checkResources,
};

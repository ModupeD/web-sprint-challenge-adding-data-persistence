// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");
const {
    checkProjectsId,
    checkProjects,
} = require('./middleware')

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:project_id", checkProjectsId, async (req, res, next) => {
   res.json(req.project)
});

router.post(
  "/:project_id",
  checkProjectsId,
  checkProjects,
  async (req, res, next) => {
   try {
      const projects = await Project.create(req.body);
    res.json(projects);
    } catch (err) {
      next(err);
    }
  }
);

//router.use("*", (req, res, next) => {
//  res.json({ api: "up" });
//});

router.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong inside the projects router",
    message: err.message,
    stack: err.stack,
  });
});
module.exports = router;

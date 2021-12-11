// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");
const {
    checkResourcesId,
    checkResources,
} = require('./middleware')

router.get("/", async (req, res, next) => {
    try {
      const resources = await Resource.getAll();
      res.json(resources);
    } catch (err) {
      next(err);
    }
  });

  router.get("/:resource_id", checkResourcesId, async (req, res, next) => {
    res.json(req.project)
 });
 
 router.post(
   "/:resource_id",
   checkResourcesId,
   checkResources,
   async (req, res, next) => {
    try {
       const resources = await Resource.create(req.body);
     res.json(resources);
     } catch (err) {
       next(err);
     }
   }
 );
router.use("*", (req, res, next) => {
res.json({ api: "down" });
});

router.use((err, req, res, next) => {
    //eslint-disable-line
    res.status(500).json({
      customMessage: "something went wrong inside the projects router",
      message: err.message,
      stack: err.stack,
    });
  });
  module.exports = router;
  
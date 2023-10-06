const { addData, getValues } = require("./controllers/Dscovr");
const { addSphere, getShpere } = require("./controllers/Sphere");

const router = require("express").Router();
router.get("/api/v1/bar/records?:timestamps", getValues);
// router.post("/api/v1/bar/records", addData)
router.get("/api/v1/sphere/records?:timestamps", getShpere);
// router.post("/api/v1/sphere/records", addSphere)
module.exports = router;
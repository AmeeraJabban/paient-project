var express = require("express");
var router = express.Router();
var patientSvc= require('./patientServicesClass');

const bodyParser = require('body-parser');
router.use(bodyParser.text({type: 'text/plain'}))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  var patientData = patientSvc.GetAll();
  res.json(patientData);
});
router.get("/ID/:ID", (req, res) => {
  var patient= patientSvc.GetByID(req.params.ID);
  res.json(patient);
});
router.post("/add", (req, res) => {
  var patient = patientSvc.Add(req.body);
  res.json(patient);
});
router.put("/Edit", (req, res) => {
  var patient = patientSvc.Update(req.body);
  res.json(patient);
});
router.delete("/Delete", (req, res) => {
  var patient = patientSvc.Delete(req.body.ID);
  res.json(patient);
});
module.exports = router;


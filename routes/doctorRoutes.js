const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

//post SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

module.exports = router;

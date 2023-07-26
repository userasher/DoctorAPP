const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

//post SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//ppost get single doc info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);
module.exports = router;

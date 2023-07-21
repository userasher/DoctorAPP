const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
} = require("../controllers/userCtrl");
const authmiddleware = require("../middlewares/authMiddleware.js");

//router object
const router = express.Router();

//routes

//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);
module.exports = router;

//Auth || POST
router.post("/getUserData", authmiddleware, authController);
module.exports = router;

//Apply Doctor || POST
router.post("/apply-doctor", authmiddleware, applyDoctorController);
module.exports = router;

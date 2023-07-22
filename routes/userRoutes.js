const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
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

//Notification Doctor || POST
router.post(
  "/get-all-notification",
  authmiddleware,
  getAllNotificationController
);

//Notification Doctor(delete) || POST
router.post(
  "/delete-all-notification",
  authmiddleware,
  deleteAllNotificationController
);
module.exports = router;

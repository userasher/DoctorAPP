const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const {
  getAllDoctorsController,
  getAllUsersController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl.js");
const router = express.Router();

//get method || users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//get method || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//post account status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;

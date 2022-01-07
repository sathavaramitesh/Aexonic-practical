"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const validate_1 = require("../../validate");
const userController_1 = require("./userController");
const userModel_1 = require("./userModel");
const v = new validate_1.Validator();
const router = express_1.Router();
const userController = new userController_1.UserController();
// List users with pagination API
const usersListRoutePath = [userController.userList];
router.get("/list", usersListRoutePath);
// Update user detail
const userUpdate = [v.validate(userModel_1.UserUpdateDetailModel), userController.updateUser];
router.post("/update", userUpdate);
// List users search with pagination API
const searchUsersListRoutePath = [userController.searchUser];
router.get("/searchUser", searchUsersListRoutePath);
exports.UserRoute = router;
//# sourceMappingURL=userRoute.js.map
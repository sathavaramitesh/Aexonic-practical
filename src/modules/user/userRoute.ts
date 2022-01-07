import { Router } from "express";
import { Validator } from "../../validate";
import { UserController } from "./userController";
import { UserUpdateDetailModel } from "./userModel";

const v: Validator = new Validator();
const router: Router = Router();
const userController = new UserController();

// List users with pagination API
const usersListRoutePath = [userController.userList];
router.get("/list", usersListRoutePath);

// Update user detail
const userUpdate = [v.validate(UserUpdateDetailModel), userController.updateUser]
router.post("/update", userUpdate);


// List users search with pagination API
const searchUsersListRoutePath = [userController.searchUser];
router.get("/searchUser", searchUsersListRoutePath);

export const UserRoute: Router = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const responseBuilder_1 = require("../../helpers/responseBuilder");
const userUtils_1 = require("./userUtils");
const utils_1 = require("../../helpers/utils");
class UserController {
    constructor() {
        this.userUtils = new userUtils_1.UserUtils();
        this.userList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { limit, skip } = yield utils_1.Utils.getSkipLimit(req.query.pg);
            const result = yield this.userUtils.getUser(limit, skip, req.query.search);
            return res.status(result.code).json(responseBuilder_1.ResponseBuilder.successMessage(req.t("SUCCESS"), result.data));
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req._user;
            yield this.userUtils.updateUser(req.body, userId);
            const response = responseBuilder_1.ResponseBuilder.successMessage(req.t("USER_UPDATED"), {});
            res.status(response.code).json(response);
        });
        this.searchUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { limit, skip } = yield utils_1.Utils.getSkipLimit(req.query.pg);
            const result = yield this.userUtils.getUser(limit, skip, req.query.search);
            return res.status(result.code).json(responseBuilder_1.ResponseBuilder.successMessage(req.t("SUCCESS"), result.data));
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map
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
exports.UserUtils = void 0;
const My = require("jm-ez-mysql");
const tables_1 = require("../../config/tables");
const utils_1 = require("../../helpers/utils");
const responseBuilder_1 = require("../../helpers/responseBuilder");
class UserUtils {
    /**
    * should be getting users
    */
    getUser(limit, skip, search) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchString = search ? `firstName LIKE '%${search}%' OR lastName LIKE '%${search}%' OR email LIKE '%${search}%' OR mobileNo LIKE '%${search}%' ` : "";
            let condition = searchString;
            const selectFields = ['id AS userId, firstName, lastName, email, createdAt, updatedAt'];
            const result = yield My.findAllWithCount(tables_1.Tables.USER, [`id`], selectFields, condition, ` ORDER BY ${tables_1.UserTable.CREATED_AT} ASC limit ${limit} offset ${skip} `);
            const pagination = utils_1.Utils.paginationObject(result.count, limit);
            return responseBuilder_1.ResponseBuilder.data({ pagination: pagination, data: result.result });
        });
    }
    // update user by Id
    updateUser(details, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield My.updateFirst(tables_1.Tables.USER, details, "id = ?", [userId]);
        });
    }
}
exports.UserUtils = UserUtils;
//# sourceMappingURL=userUtils.js.map
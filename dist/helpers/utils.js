"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const constants_1 = require("../config/constants");
const regex_1 = require("../config/regex");
const bcryptjs = require("bcryptjs");
class Utils {
    static isValidPassword(data) {
        const regex = regex_1.Regex.PASSWORD;
        return regex.test(data);
    }
    static compareHashPassword(password, existedPassword) {
        return bcryptjs.compareSync(password, existedPassword);
    }
}
exports.Utils = Utils;
Utils.getEncryptedPassword = (password) => {
    var salt = bcryptjs.genSaltSync(constants_1.Constants.HASH_STRING_LIMIT).toString('base64');
    return bcryptjs.hashSync(password, salt);
};
/** get skip and limit to avoid multiple code lines */
Utils.getSkipLimit = (page, recordsPerPage = null) => {
    let skip = 0;
    const limit = recordsPerPage ? recordsPerPage : constants_1.Constants.DEFAULT_LIMIT; // for paginate records
    if (page) {
        skip = (page - 1) * limit;
    }
    return { limit, skip };
};
Utils.paginationObject = (total, limit) => {
    const pages = Math.ceil(total / limit);
    return {
        pages: pages || 1,
        total: total,
        max: limit,
    };
};
//# sourceMappingURL=utils.js.map
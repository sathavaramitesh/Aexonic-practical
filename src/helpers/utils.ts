import { Constants } from "../config/constants";
import { Regex } from "../config/regex";
import bcryptjs = require("bcryptjs");

export class Utils {



    public static isValidPassword(data: string) {
        const regex = Regex.PASSWORD;
        return regex.test(data);
    }

    public static compareHashPassword(password: string, existedPassword: string) {
        return bcryptjs.compareSync(password, existedPassword);
    }

    public static getEncryptedPassword = (password: string) => {
        var salt = bcryptjs.genSaltSync(Constants.HASH_STRING_LIMIT).toString('base64');
        return bcryptjs.hashSync(password, salt);
    }


      /** get skip and limit to avoid multiple code lines */
      public static getSkipLimit = (page: number, recordsPerPage: number = null) => {
        let skip = 0;
        const limit = recordsPerPage ? recordsPerPage : Constants.DEFAULT_LIMIT; // for paginate records
        if (page) {
            skip = (page - 1) * limit;
        }
        return { limit, skip };
    }

    public static paginationObject = (total: number, limit: number) => {
        const pages = Math.ceil(total / limit);
        return {
            pages: pages || 1,
            total: total,
            max: limit,
        };
    };
}

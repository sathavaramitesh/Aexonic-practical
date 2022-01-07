import * as My from "jm-ez-mysql";
import { UserTable, Tables } from "../../config/tables";
import { Utils } from "../../helpers/utils";
import { ResponseBuilder } from "../../helpers/responseBuilder";

export class UserUtils {
  
  /**
  * should be getting users
  */
  public async getUser(limit: number, skip: number, search: string) {
    const searchString = search ? `firstName LIKE '%${search}%' OR lastName LIKE '%${search}%' OR email LIKE '%${search}%' OR mobileNo LIKE '%${search}%' ` : "";
    let condition = searchString;
    const selectFields = ['id AS userId, firstName, lastName, email, createdAt, updatedAt']
    const result = await My.findAllWithCount(Tables.USER, [`id`], selectFields, condition, ` ORDER BY ${UserTable.CREATED_AT} ASC limit ${limit} offset ${skip} `);
    
    const pagination = Utils.paginationObject(result.count, limit);
    return ResponseBuilder.data({ pagination: pagination, data: result.result });
  }

    // update user by Id
    public async updateUser(details: Json, userId: number) {
    
      return await My.updateFirst(Tables.USER, details, "id = ?", [userId]);
    }
}

import { Request, Response } from "express";
import { ResponseBuilder } from "../../helpers/responseBuilder";
import { UserUtils } from "./userUtils";
import { Utils } from "../../helpers/utils";

export class UserController {
    private userUtils: UserUtils = new UserUtils();

    public userList = async (req: Request, res: Response) => {
        const { limit, skip } = await Utils.getSkipLimit(req.query.pg);
        const result: ResponseBuilder = await this.userUtils.getUser(limit, skip, req.query.search);        
        return res.status(result.code).json(ResponseBuilder.successMessage(req.t("SUCCESS"), result.data));
    }

    public updateUser = async (req: any, res: Response) => {
        const { userId } = req._user;
        await this.userUtils.updateUser(req.body, userId);
        const response = ResponseBuilder.successMessage(req.t("USER_UPDATED"), {});
        res.status(response.code).json(response);
     }

     public searchUser = async (req: Request, res: Response) => {
        const { limit, skip } = await Utils.getSkipLimit(req.query.pg);
        const result: ResponseBuilder = await this.userUtils.getUser(limit, skip, req.query.search);        
        return res.status(result.code).json(ResponseBuilder.successMessage(req.t("SUCCESS"), result.data));
        
    }

}

import type { RequestHandler } from "express";
import { ApiResponse } from "../utils/response.utils";
import { STATUS_CODES } from "../enums/status.codes.enums";

export default class HealthController {
  public getHealth: RequestHandler = (_, res, next) => {
    try {
      res
        .status(STATUS_CODES.OK)
        .send(ApiResponse.success("Server is UP and RUNNING"));
    } catch (error) {
      next(error);
    }
  };
}

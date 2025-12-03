import type { RequestHandler } from "express";
import { ApiResponse } from "../utils/response.utils";

export default class HealthController {
  public getHealth: RequestHandler = (_, res, next) => {
    try {
      res.status(200).send(ApiResponse.success("Server is UP and RUNNING"));
    } catch (error) {
      next(error);
    }
  };
}

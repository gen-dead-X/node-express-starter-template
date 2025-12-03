import { format } from "date-fns";
import type { Request, Response, NextFunction } from "express";

export default function globalLoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, headers, params, query, originalUrl, baseUrl, host } = req;

    console.log(":::::::::::::::::::::Incoming Request:::::::::::::::::::::");
    console.log({
      body,
      headers,
      params,
      query,
      originalUrl,
      baseUrl,
      host,
      time: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    });
    console.log(":::::::::::::::::::::Request Ends:::::::::::::::::::::");

    next();
  } catch (error) {
    next(error);
  }
}

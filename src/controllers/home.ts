import { NextFunction, Request, Response } from "express";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({
      message: "home route is optimal",
    });
  } catch (error) {
    next(error);
  }
};

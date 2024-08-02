import { NextFunction, Request, Response } from "express";
import { chargingService } from "../services/chagring";

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const start = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { organizationId, userId } = req.body;
    const data = {
      organizationId,
      userId,
      chargingStationId: id,
    };

    //validate request body

    const started = await chargingService.start(id, data);
    return res.status(200).json(started);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const stop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { organizationId, userId } = req.body;
    const data = {
      organizationId,
      userId,
      chargingStationId: id,
    };

    //validate request body

    const stoped = await chargingService.stop(data);
    return res.status(200).json(stoped);
  } catch (error) {
    next(error);
  }
};

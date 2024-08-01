import { NextFunction, Request, Response } from "express";
import ChargingStation from "../models/chargingStation";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stations = await ChargingStation.find({});
    return res.status(200).json(stations);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //validate request body
    const stations = await ChargingStation.create(req.body);
    return res.status(200).json(stations);
  } catch (error) {
    next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const station = await ChargingStation.findById(req.params.id);
    if (!station) {
      throw new Error("Not Found!");
    }
    return res.status(200).json(station);
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
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //ideally check for ownership for organization and permissions
  //validate request body
  try {
    const station = await ChargingStation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(station);
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ChargingStation.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};

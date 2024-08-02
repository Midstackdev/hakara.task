import { Handler, NextFunction } from "express";
import request from "supertest";
import App from "../src";

export const mockRequest = () => {
  const req: any = {};
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

export const mockResponse = () => {
  const res: any = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
export const mockNext = (): NextFunction => jest.fn();

export type MockedResponse = ReturnType<typeof mockResponse>;
export type MockedRequest = ReturnType<typeof mockRequest>;
export type MockedNext = ReturnType<typeof mockNext>;

export const callHandler = async (
  handler: Handler,
  req: MockedRequest,
  res: MockedResponse,
  next: MockedNext
): Promise<void> => {
  await handler(req, res, next);
};

export const app = request(App);

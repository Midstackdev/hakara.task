import { Router } from "express";
import homeRoutes from "./home";
import stationRoutes from "./chargingStation";
import chargeRoutes from "./charge";

const routes = Router();

routes.use("/home", homeRoutes);
routes.use("/station", stationRoutes);
routes.use("/charge", chargeRoutes);

export default routes;

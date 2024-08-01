import { Router } from "express";
import * as controllers from "../controllers/charge";

const routes = Router();

routes.route("/:id/start").post(controllers.start);
routes.route("/:id/stop").post(controllers.stop);

export default routes;

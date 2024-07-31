import { Router } from "express";
import * as controllers from "../controllers/chargingStation";

const routes = Router();

routes.route("/").get(controllers.index);
routes.route("/").post(controllers.create);
routes.route("/:id").get(controllers.show);
routes.route("/:id").put(controllers.update);
routes.route("/:id").delete(controllers.remove);

export default routes;

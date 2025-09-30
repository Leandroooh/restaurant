import { Router } from "express";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { DetailsUserController } from "./controllers/users/DetailsUserController";

const router = Router();

/* User Routes */
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", new DetailsUserController().handle);

export { router };

import { Router } from "express";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { CreateUserController } from "./controllers/users/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

router.post("/users", createUserController.handle);
router.post("/session", authUserController.handle);

export { router };

import type { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
	async handle(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const createUserService = new CreateUserService();
		const newUser = createUserService.execute({ name, email, password });

		return res.json({ newUser });
	}
}

export { CreateUserController };

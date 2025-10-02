import type { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
	async handle(req: Request, res: Response) {
		const { name, price, description, categoryId } = req.body;

		const createProductService = new CreateProductService();

		if (!req.file) {
			throw new Error("upload file error!");
		}

		const { filename: banner } = req.file;

		const product = await createProductService.execute({
			name,
			price,
			description,
			banner,
			categoryId,
		});

		res.json(product);
	}
}

export { CreateProductController };

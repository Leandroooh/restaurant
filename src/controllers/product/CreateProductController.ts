import type { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
	async handle(req: Request, res: Response) {
		const { name, price, description, category_id } = req.body;

		const createProductService = new CreateProductService();

		if (!req.file) {
			throw new Error("upload file error!");
		}

		// const { filename } = req.file;

		const product = createProductService.execute({
			name,
			price,
			description,
			banner: "",
			category_id,
		});

		res.json({ product });
	}
}

export { CreateProductController };

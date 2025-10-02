import type { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
	async handle(req: Request, res: Response) {
		const categoryId = req.query.categoryId as string;

		const listByCategoryService = new ListByCategoryService();
		const productList = await listByCategoryService.execute({ categoryId });

		if (productList.length <= 0) {
			throw new Error("products not found in this category!");
		}

		res.json(productList);
	}
}

export { ListByCategoryController };

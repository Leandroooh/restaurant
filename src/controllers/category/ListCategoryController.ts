import type { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
	async handle(_req: Request, res: Response) {
		const categoryService = new ListCategoryService();
		const category = await categoryService.execute();

		return res.json({ category });
	}
}

export { ListCategoryController };

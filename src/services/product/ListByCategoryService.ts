import { prismaClient } from "../../prisma";

type ProductRequest = {
	categoryId: string;
};

class ListByCategoryService {
	async execute({ categoryId }: ProductRequest) {
		const categoryProducts = await prismaClient.product.findMany({
			where: {
				categoryId,
			},
		});

		return categoryProducts;
	}
}

export { ListByCategoryService };

import { prismaClient } from "../../prisma";

class ListCategoryService {
	async execute() {
		const category = await prismaClient.category.findMany({
			select: {
				id: true,
				name: true,
			},
		});

		if (category.length === 0) {
			throw new Error("Not have category available, please create!");
		}

		return category;
	}
}

export { ListCategoryService };

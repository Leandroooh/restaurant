import { prismaClient } from "../../prisma";

type CategoryRequest = {
	name: string;
};

class CreateCategoryService {
	async execute({ name }: CategoryRequest) {
		if (!name) {
			throw new Error("Invalid name!");
		}

		const categoryAlreadyExist = await prismaClient.category.findFirst({
			where: {
				name,
			},
		});

		if (categoryAlreadyExist) {
			throw new Error("Category already exist!");
		}

		const category = await prismaClient.category.create({
			data: {
				name,
			},
			select: {
				id: true,
				name: true,
			},
		});

		return category;
	}
}

export { CreateCategoryService };
